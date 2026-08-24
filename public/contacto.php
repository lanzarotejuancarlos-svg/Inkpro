<?php
declare(strict_types=1);

/**
 * Receives the contact form and mails it to the Isla Digital inbox.
 *
 * Delivery is local: the site and the mailbox live on the same Hostinger
 * account, so mail() hands off without leaving the server. From: uses an
 * address on our own domain (never the visitor's) so SPF still passes; the
 * visitor goes in Reply-To, which is what makes "reply" work.
 */

const DESTINATARIO = 'hola@isladigital.net';
const REMITENTE    = 'no-reply@isladigital.net';
const MAX_MENSAJE  = 5000;

/** True when the browser asked for JSON (our fetch call does). */
function quiereJson(): bool {
    $xhr = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';
    $acc = $_SERVER['HTTP_ACCEPT'] ?? '';
    return strcasecmp($xhr, 'XMLHttpRequest') === 0 || str_contains($acc, 'application/json');
}

/**
 * Answer in whichever format was asked for. Without JS the form does a plain
 * POST, so that path has to render a real page rather than dumping JSON.
 */
function responder(int $codigo, bool $ok, string $mensaje): never {
    http_response_code($codigo);

    if (quiereJson()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'mensaje' => $mensaje], JSON_UNESCAPED_UNICODE);
        exit;
    }

    header('Content-Type: text/html; charset=utf-8');
    $texto  = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');
    $titulo = $ok ? 'Mensaje enviado' : 'No se pudo enviar';
    echo <<<HTML
    <!doctype html><html lang="es"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>$titulo · Isla Digital</title>
    <style>
      body{background:#060608;color:#fff;font-family:system-ui,sans-serif;
           display:flex;min-height:100vh;align-items:center;justify-content:center;
           margin:0;padding:2rem;text-align:center}
      a{color:#c084fc}
    </style></head><body><div>
      <h1>$titulo</h1><p>$texto</p><p><a href="/">Volver a la web</a></p>
    </div></body></html>
    HTML;
    exit;
}

/** Strip CR/LF so user input can never inject extra mail headers. */
function unaLinea(string $v): string {
    return trim(str_replace(["\r", "\n", "\0"], ' ', $v));
}

// ── 1. Only POST ──────────────────────────────────────────────────────────
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    responder(405, false, 'Método no permitido.');
}

// ── 2. Honeypot ───────────────────────────────────────────────────────────
// Hidden from people, irresistible to bots. Report success so the bot does
// not retry, but send nothing.
if (trim((string) ($_POST['web'] ?? '')) !== '') {
    responder(200, true, 'Gracias, hemos recibido tu mensaje.');
}

// ── 3. Read and validate ──────────────────────────────────────────────────
$nombre   = unaLinea((string) ($_POST['nombre']   ?? ''));
$email    = unaLinea((string) ($_POST['email']    ?? ''));
$telefono = unaLinea((string) ($_POST['telefono'] ?? ''));
$mensaje  = trim((string) ($_POST['mensaje']  ?? ''));

if ($nombre === '' || mb_strlen($nombre) > 100) {
    responder(422, false, 'Indica tu nombre.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 190) {
    responder(422, false, 'Esa dirección de email no parece válida.');
}
if (mb_strlen($telefono) > 40) {
    responder(422, false, 'El teléfono es demasiado largo.');
}
if ($mensaje === '' || mb_strlen($mensaje) > MAX_MENSAJE) {
    responder(422, false, 'Escribe tu consulta (máximo ' . MAX_MENSAJE . ' caracteres).');
}

// ── 4. Compose ────────────────────────────────────────────────────────────
$asunto = 'Nueva consulta desde isladigital.net';
$cuerpo = implode("\n", [
    'Nombre:   ' . $nombre,
    'Email:    ' . $email,
    'Teléfono: ' . ($telefono !== '' ? $telefono : '(no indicado)'),
    '',
    'Mensaje:',
    $mensaje,
    '',
    str_repeat('-', 40),
    'Enviado desde el formulario de isladigital.net',
    'Fecha: ' . date('d/m/Y H:i:s'),
    'IP:    ' . ($_SERVER['REMOTE_ADDR'] ?? 'desconocida'),
]);

$cabeceras = implode("\r\n", [
    'From: Web Isla Digital <' . REMITENTE . '>',
    'Reply-To: ' . $nombre . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

// RFC 2047 so accented subjects survive every mail client
$asuntoCodificado = '=?UTF-8?B?' . base64_encode($asunto) . '?=';

$enviado = @mail(DESTINATARIO, $asuntoCodificado, $cuerpo, $cabeceras, '-f' . REMITENTE);

if (!$enviado) {
    error_log('[isladigital] mail() falló para ' . $email);
    responder(500, false,
        'No hemos podido enviar el mensaje. Escríbenos directamente a ' . DESTINATARIO);
}

responder(200, true, '¡Gracias! Hemos recibido tu mensaje y te respondemos en menos de 48 h.');

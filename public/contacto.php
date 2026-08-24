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

/**
 * MUST be a mailbox that really exists on the domain. Sending as an address
 * that was never created (no-reply@, and friends) scores badly with spam
 * filters and leaves the Return-Path pointing nowhere, so bounces vanish.
 */
const REMITENTE    = 'hola@isladigital.net';
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
$empresa  = unaLinea((string) ($_POST['empresa']  ?? ''));
$email    = unaLinea((string) ($_POST['email']    ?? ''));
$telefono = unaLinea((string) ($_POST['telefono'] ?? ''));
$sector   = unaLinea((string) ($_POST['sector']   ?? ''));
$presu    = unaLinea((string) ($_POST['presupuesto'] ?? ''));
$mensaje  = trim((string) ($_POST['mensaje']  ?? ''));

// Checkbox group. Never trust the posted labels: keep only values we offer,
// so the mail body cannot be stuffed with arbitrary text.
const SERVICIOS_VALIDOS = [
    'Diseño & Desarrollo Web',
    'Apps Móviles',
    'Asistentes IA & Chatbots',
    'Automatización de Procesos',
    'Análisis & Business Intelligence',
    'Integraciones & CRM',
];
const SECTORES_VALIDOS = [
    'Turismo & Hostelería',
    'Construcción & Inmobiliaria',
    'Comercio Local',
    'Salud & Bienestar',
    'Formación & Servicios',
    'Agricultura & Alimentación',
    'Otro',
];
const PRESUPUESTOS_VALIDOS = [
    'Menos de 300 €', '300 € - 500 €', '500 € - 1.000 €',
    '1.000 € - 3.000 €', 'Más de 3.000 €', 'Aún no lo sé',
];

$serviciosCrudo = $_POST['servicios'] ?? [];
if (!is_array($serviciosCrudo)) {
    $serviciosCrudo = [$serviciosCrudo];
}
$servicios = array_values(array_intersect(
    array_map(static fn($v): string => unaLinea((string) $v), $serviciosCrudo),
    SERVICIOS_VALIDOS
));

if ($nombre === '' || mb_strlen($nombre) > 100) {
    responder(422, false, 'Indica tu nombre.');
}
if (mb_strlen($empresa) > 120) {
    responder(422, false, 'El nombre de la empresa es demasiado largo.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 190) {
    responder(422, false, 'Esa dirección de email no parece válida.');
}
if (mb_strlen($telefono) > 40) {
    responder(422, false, 'El teléfono es demasiado largo.');
}
if (!in_array($sector, SECTORES_VALIDOS, true)) {
    responder(422, false, 'Selecciona un sector de la lista.');
}
if ($presu !== '' && !in_array($presu, PRESUPUESTOS_VALIDOS, true)) {
    responder(422, false, 'Ese presupuesto no es una de las opciones.');
}
if ($mensaje === '' || mb_strlen($mensaje) > MAX_MENSAJE) {
    responder(422, false, 'Escribe tu consulta (máximo ' . MAX_MENSAJE . ' caracteres).');
}
// Consent is required by the RGPD before we may process the enquiry at all.
if (($_POST['privacidad'] ?? '') === '') {
    responder(422, false, 'Debes aceptar la política de privacidad.');
}

// ── 4. Compose ────────────────────────────────────────────────────────────
$asunto = 'Nueva consulta desde isladigital.net';
$cuerpo = implode("\n", [
    'Nombre:      ' . $nombre,
    'Empresa:     ' . ($empresa  !== '' ? $empresa  : '(no indicada)'),
    'Email:       ' . $email,
    'Teléfono:    ' . ($telefono !== '' ? $telefono : '(no indicado)'),
    'Sector:      ' . $sector,
    'Servicios:   ' . ($servicios !== [] ? implode(', ', $servicios) : '(ninguno marcado)'),
    'Presupuesto: ' . ($presu !== '' ? $presu : '(no indicado)'),
    '',
    'Mensaje:',
    $mensaje,
    '',
    str_repeat('-', 46),
    'Enviado desde el formulario de isladigital.net',
    'Consentimiento RGPD aceptado en el envío.',
    'Fecha: ' . date('d/m/Y H:i:s'),
    'IP:    ' . ($_SERVER['REMOTE_ADDR'] ?? 'desconocida'),
]);

// A missing Message-ID or Date is itself a spam signal — well-behaved mailers
// always set both, so their absence marks the message as machine-generated.
$dominio   = substr(strrchr(REMITENTE, '@') ?: '@localhost', 1);
$messageId = sprintf('<%s.%s@%s>', date('YmdHis'), bin2hex(random_bytes(8)), $dominio);

$cabeceras = implode("\r\n", [
    'From: Web Isla Digital <' . REMITENTE . '>',
    'Reply-To: ' . $nombre . ' <' . $email . '>',
    'Date: ' . date('r'),
    'Message-ID: ' . $messageId,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'Auto-Submitted: auto-generated',
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

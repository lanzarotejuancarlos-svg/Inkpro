"use client";
import React, { useState } from "react";
import Icon from "../ui/Icon";

const questions = [
  ["¿De verdad son 3 stencils gratis sin tarjeta?", "Sí, sin truco. Creas tu cuenta con email y generas 3 stencils completos, en cualquier estilo y con descarga real. No pedimos tarjeta hasta que decidas pasar a un plan."],
  ["¿Qué pasa con los créditos que no uso?", "En planes anuales se acumulan hasta 2 meses. En mensuales se reinician al renovar. Lo decimos claro en la página de precios y dentro de la app, en tu panel de facturación."],
  ["¿En qué formatos puedo exportar?", "PNG (con fondo transparente opcional), PDF a tamaño real para imprimir, y JPG. En Pro y Studio desbloqueas el upscale a 4K para piezas grandes."],
  ["¿Funciona con cualquier foto?", "Funciona mejor con imágenes nítidas y bien iluminadas. Te damos una guía DO/DON'T y, si una foto no da buen resultado, no te gastamos el crédito: puedes regenerarla con otros ajustes."],
  ["¿Puedo usar los stencils comercialmente?", "Totalmente. Lo que generas es tuyo y puedes tatuarlo y cobrarlo sin licencias adicionales. Tú pones el arte; nosotros solo limpiamos el trazo."],
  ["¿Hay plan para estudios con varios artistas?", "Sí. El plan Studio incluye hasta 5 artistas, carpetas por cliente y facturación unificada. Si necesitáis más asientos, escríbenos y lo ajustamos."],
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" style={{ padding: "92px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div style={{ width: "100%", maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: 0 }}>
            Lo que sueles preguntar
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {questions.map(([q, a], i) => (
            <div key={i} className="card" style={{
              borderColor: open === i ? "var(--acc-line)" : "var(--border)",
              transition: "border-color .2s", overflow: "hidden",
            }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: 16, padding: "20px 24px",
                  background: "none", border: "none", color: "var(--text)",
                  textAlign: "left", fontFamily: "var(--font-head)", fontSize: 17, fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {q}
                <span style={{
                  flexShrink: 0, color: open === i ? "var(--acc)" : "var(--text-3)",
                  transform: open === i ? "rotate(180deg)" : "none",
                  transition: "transform .25s",
                }}>
                  <Icon name="chevDown" size={22} />
                </span>
              </button>
              <div style={{
                maxHeight: open === i ? 240 : 0,
                transition: "max-height .3s ease",
                overflow: "hidden",
              }}>
                <p style={{ margin: 0, padding: "0 24px 22px", color: "var(--text-2)", fontSize: 15.5, lineHeight: 1.65 }}>
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";

const SAMPLE_COLORS = [
  "linear-gradient(135deg, #6b8f71 0%, #3d5a40 100%)",
  "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)",
  "linear-gradient(135deg, #7a9db5 0%, #4a6b80 100%)",
];

function stencilFilter(style: string): React.CSSProperties {
  if (style === "Outline") return { filter: "grayscale(1) contrast(3.5) brightness(1.1)" };
  if (style === "Hatching") return { filter: "grayscale(1) contrast(2.8) brightness(1.08) saturate(0)" };
  return { filter: "grayscale(1) contrast(2.2) brightness(1.05)" };
}

const STYLE_CARDS = [
  {
    style: "Outline",
    title: "Outline",
    desc: "Solo contorno, línea fina y continua. Ideal para fineline y para construir tu propia sombra a mano.",
    bg: SAMPLE_COLORS[0],
  },
  {
    style: "Standard",
    title: "Standard",
    desc: "Contorno con referencia de valores. El equilibrio perfecto para la mayoría de las piezas.",
    bg: SAMPLE_COLORS[1],
  },
  {
    style: "Hatching",
    title: "Hatching",
    desc: "Tramado direccional para guiar el sombreado. Pensado para blackwork y grabado.",
    bg: SAMPLE_COLORS[2],
  },
];

export default function StylesSection() {
  return (
    <section id="comparador" style={{ padding: "92px 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <span className="eyebrow">Tres estilos · un trazo</span>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: 0 }}>
            Elige el acabado exacto que tu pieza necesita
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 17, marginTop: 16 }}>
            El mismo motor, tres salidas. Cambia entre ellos en un toque, también dentro del editor.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="grid-3">
          {STYLE_CARDS.map(({ style, title, desc, bg }) => (
            <div key={style} className="card lum" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", aspectRatio: "1/1", background: "#f3efe6" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: bg,
                  ...stencilFilter(style),
                }}/>
                {style === "Hatching" && (
                  <div style={{
                    position: "absolute", inset: 0, mixBlendMode: "multiply", opacity: 0.5,
                    backgroundImage: "repeating-linear-gradient(45deg, rgba(20,20,20,.5) 0 1px, transparent 1px 5px)",
                  }}/>
                )}
                <span style={{
                  position: "absolute", top: 12, left: 12,
                  fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
                  color: "var(--acc-bright)", background: "rgba(10,10,11,.7)",
                  border: "1px solid var(--acc-line)", padding: "5px 10px", borderRadius: 999,
                  backdropFilter: "blur(6px)",
                }}>
                  {style}
                </span>
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-head)", fontSize: 19, fontWeight: 700 }}>{title}</h3>
                <p style={{ margin: "8px 0 0", color: "var(--text-2)", fontSize: 14.5, lineHeight: 1.55 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Icon from "../ui/Icon";

const steps = [
  { n: "01", icon: "upload", t: "Sube tu foto", d: "Arrastra cualquier imagen — retrato, referencia o flash propio. JPG, PNG o HEIC." },
  { n: "02", icon: "sliders", t: "Elige el estilo", d: "Outline, Standard o Hatching. Ajusta detalle y contraste hasta que el trazo cante." },
  { n: "03", icon: "download", t: "Imprime y transfiere", d: "Descarga en PDF a tamaño real o PNG transparente, listo para la térmica." },
];

export default function HowSection() {
  return (
    <section id="como" style={{ padding: "92px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: 0, maxWidth: 620 }}>
            De la foto a la camilla en tres pasos
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="grid-3">
          {steps.map((s, i) => (
            <div key={s.n} className="card lum" style={{ padding: "30px 28px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{
                position: "absolute", top: 18, right: 22,
                fontFamily: "var(--font-display)", fontSize: 54, fontWeight: 900,
                color: "var(--surface-3)", lineHeight: 1,
              }}>
                {s.n}
              </div>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "var(--acc-soft)", border: "1px solid var(--acc-line)",
                color: "var(--acc-bright)", display: "grid", placeItems: "center", marginBottom: 22,
              }}>
                <Icon name={s.icon} size={24} />
              </div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-head)", fontSize: 21, fontWeight: 700 }}>{s.t}</h3>
              <p style={{ margin: "10px 0 0", color: "var(--text-2)", fontSize: 15, lineHeight: 1.6 }}>{s.d}</p>
              {i < 2 && (
                <div className="lw-hide-sm" style={{ position: "absolute", top: 52, right: -11, color: "var(--acc)", zIndex: 2 }}>
                  <Icon name="arrowRight" size={22} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

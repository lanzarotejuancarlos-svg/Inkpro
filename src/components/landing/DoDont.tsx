"use client";
import React from "react";
import Icon from "../ui/Icon";

const good = ["Buena luz, foco nítido", "Sujeto claro y centrado", "Alto contraste con el fondo", "Resolución ≥ 1000px"];
const bad = ["Borrosa o con flash quemado", "Fondo recargado y ruidoso", "Sombras que tapan el detalle", "Capturas pixeladas de pantalla"];

const cols = [
  { ok: true, title: "Hazlo así", items: good, bg: "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)", filterStr: "grayscale(1) contrast(2.2) brightness(1.05)" },
  { ok: false, title: "Evita esto", items: bad, bg: "linear-gradient(135deg, #b58a6b 0%, #7a5a40 100%)", filterStr: "grayscale(1) contrast(2.2) brightness(1.05) blur(1.4px)" },
];

export default function DoDont() {
  return (
    <section style={{ padding: "92px 0" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 44, maxWidth: 560 }}>
          <span className="eyebrow">Saca lo mejor</span>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: 0 }}>
            La foto manda. Aciértala.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="grid-2">
          {cols.map(col => (
            <div key={col.title} className="card lum" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "16/8", background: "#f3efe6" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: col.bg,
                  filter: col.filterStr,
                }}/>
                {!col.ok && <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,11,.35)" }}/>}
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  width: 34, height: 34, borderRadius: 999, display: "grid", placeItems: "center",
                  background: col.ok ? "var(--ok)" : "var(--err)", color: "#0A0A0B",
                }}>
                  <Icon name={col.ok ? "check" : "x"} size={20} />
                </div>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <h3 style={{ margin: "0 0 16px", fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 700 }}>{col.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.items.map(it => (
                    <li key={it} style={{ display: "flex", gap: 11, fontSize: 14.5, color: "var(--text-2)" }}>
                      <Icon name={col.ok ? "checkCircle" : "xCircle"} size={18} style={{ color: col.ok ? "var(--ok)" : "var(--err)", flexShrink: 0, marginTop: 1 }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

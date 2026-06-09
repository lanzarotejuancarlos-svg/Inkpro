"use client";
import React from "react";
import Icon from "../ui/Icon";

const testimonials = [
  { name: "Mara Solís", h: "@mara.blackwork", c: "#F4B740", q: "Antes pasaba 40 minutos calcando a mano. Ahora salgo del editor con el stencil listo y el cliente ni se entera de la espera." },
  { name: "Dorian Vega", h: "@dorian.ink", c: "#9CE6C0", q: "El modo Outline es brutal para fineline. Las líneas salen limpias de verdad, sin ese ruido raro de otras apps." },
  { name: "Lena Brandt", h: "@lena.fineline", c: "#E69CC8", q: "Lo que me ganó fue el precio. Sé exactamente lo que pago por stencil. Cero sorpresas a fin de mes." },
];

function Monogram({ name, color }: { name: string; color: string }) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("");
  return (
    <div style={{
      width: 48, height: 48, borderRadius: 999, flex: "none",
      display: "grid", placeItems: "center",
      background: color, color: "#0A0A0B",
      fontFamily: "var(--font-head)", fontWeight: 800, fontSize: 16,
      border: "1px solid rgba(255,255,255,.15)",
    }}>
      {initials}
    </div>
  );
}

export default function SocialSection() {
  return (
    <section style={{ padding: "92px 0" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 46 }}>
          <div>
            <span className="eyebrow">Prueba social</span>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: 0, maxWidth: 540 }}>
              Tinta de verdad, en estudios de verdad
            </h2>
          </div>
          <div className="card" style={{ padding: "16px 22px", display: "flex", alignItems: "center", gap: 16 }}>
            <div>
              <div style={{ display: "flex", gap: 3 }}>
                {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={17} style={{ color: "var(--acc)" }} />)}
              </div>
              <div style={{ fontSize: 12.5, color: "var(--text-3)", marginTop: 4 }}>4.9 en App Store · 4.8 en Google Play</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="grid-3">
          {testimonials.map(t => (
            <figure key={t.h} className="card lum" style={{ padding: "26px 26px 24px", margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              <blockquote style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "var(--text)" }}>
                "{t.q}"
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 13, marginTop: "auto" }}>
                <Monogram name={t.name} color={t.c} />
                <div>
                  <div style={{ fontWeight: 700, fontFamily: "var(--font-head)", fontSize: 15 }}>{t.name}</div>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--text-3)", fontSize: 13 }}>
                    <Icon name="instagram" size={14} />
                    {t.h}
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: "16px 44px", alignItems: "center", justifyContent: "center", opacity: 0.6 }}>
          {["Inkstinct", "Tattoodo", "Killer Ink", "Barber DTS", "Cheyenne", "Eikon"].map(n => (
            <span key={n} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, letterSpacing: "-.01em", color: "var(--text-2)" }}>
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

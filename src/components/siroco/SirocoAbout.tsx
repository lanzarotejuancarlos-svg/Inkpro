"use client";
import React from "react";

export default function SirocoAbout() {
  return (
    <section
      style={{
        background: "#0C0C0F",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="siroco-about-grid"
        >
          {/* Left text */}
          <div>
            <span
              style={{
                display: "block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#FF4713",
                marginBottom: 20,
              }}
            >
              Quiénes somos
            </span>
            <h2
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.0,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              MÁS QUE UN
              <br />
              GIMNASIO.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 20,
              }}
            >
              Siroco Hybridbox es el <strong style={{ color: "#fff" }}>primer centro oficial HYROX de las Islas Canarias</strong>,
              ubicado en el corazón de Costa Teguise, Lanzarote.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 32,
              }}
            >
              Desde el entrenamiento funcional hasta la fisioterapia, somos un espacio
              versátil pensado para todos los niveles. Nuestro equipo de entrenadores
              certificados y fisioterapeutas te acompañan en cada paso.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {["Centro HYROX Oficial", "Fisioterapia", "Accesible", "Parking"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "rgba(255,71,19,0.1)",
                    border: "1px solid rgba(255,71,19,0.25)",
                    borderRadius: 999,
                    padding: "7px 16px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#FF7A4D",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                icon: "🔥",
                title: "Primer HYROX de Canarias",
                desc: "Centro oficial certificado para la competición de fitness más exigente del mundo.",
              },
              {
                icon: "🏆",
                title: "Atletas de alto nivel",
                desc: "Campeones mundiales y medallistas internacionales entrenados aquí mismo.",
              },
              {
                icon: "❤️",
                title: "Comunidad y ambiente",
                desc: "Más de 2.200 seguidores en Instagram. Un lugar donde la motivación se contagia.",
              },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "22px 24px",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  transition: "border-color .2s, background .2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,71,19,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,71,19,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#fff",
                      marginBottom: 5,
                    }}
                  >
                    {c.title}
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .siroco-about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

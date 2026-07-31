"use client";
import React from "react";

export default function SirocoHyrox() {
  return (
    <section
      id="hyrox"
      style={{
        background: "#0C0C0F",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background text */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-archivo-black), sans-serif",
          fontWeight: 900,
          fontSize: "clamp(80px, 20vw, 220px)",
          color: "rgba(255,71,19,0.04)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        HYROX
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="siroco-hyrox-grid"
        >
          {/* Info */}
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
              HYROX Official Center
            </span>
            <h2
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                marginBottom: 24,
              }}
            >
              ¿QUÉ ES
              <br />
              <span style={{ color: "#FF4713" }}>HYROX?</span>
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 24,
              }}
            >
              HYROX es la competición de fitness funcional de mayor crecimiento en el mundo.
              Combina 8km de carrera con 8 ejercicios funcionales de alta intensidad.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 36,
              }}
            >
              Como <strong style={{ color: "#fff" }}>primer centro oficial HYROX de Canarias</strong>,
              te preparamos con metodología certificada, tanto si vas a tu primera carrera
              como si buscas el podio mundial.
            </p>
            <a
              href="#contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#FF4713",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "background .18s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ff5c2e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FF4713")}
            >
              Quiero entrenar HYROX
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Race stations */}
          <div>
            <div
              style={{
                background: "rgba(255,71,19,0.06)",
                border: "1px solid rgba(255,71,19,0.2)",
                borderRadius: 16,
                padding: "28px",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontWeight: 900,
                  fontSize: 14,
                  color: "#FF4713",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Las 8 estaciones HYROX
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  "1km Ski Erg",
                  "50m Sled Push",
                  "50m Sled Pull",
                  "80m Burpee Broad Jump",
                  "1km RowErg",
                  "200m Farmers Carry",
                  "100m Sandbag Lunges",
                  "100 Wall Balls",
                ].map((station, i) => (
                  <div
                    key={station}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#FF4713",
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    {station}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 18,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                + 1km de carrera entre cada estación = 8km total
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                { label: "Modalidades", value: "Open · Pro · Doubles" },
                { label: "Carreras en 2024", value: "Bilbao · Málaga · Singapur · Río" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "16px 18px",
                  }}
                >
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .siroco-hyrox-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

"use client";
import React from "react";

const achievements = [
  {
    event: "HYROX Singapur 2024",
    flag: "🇸🇬",
    results: [
      { athletes: "Alberto Ramírez + José Miguel Gutiérrez", category: "Pro Doubles 40-49", position: "🥇 1.º", time: "1:07:05" },
      { athletes: "Acaymo Armas", category: "Individual 16-24", position: "🥇 1.º", time: "1:17:28" },
      { athletes: "Mario González", category: "Individual 35-39", position: "🥈 2.º", time: "1:10:36" },
    ],
  },
  {
    event: "HYROX Málaga 2024",
    flag: "🇪🇸",
    results: [
      {
        athletes: "Patricia Bethencourt + Carolina Gutiérrez",
        category: "Pro Doubles Women 40-49",
        position: "🥈 2.º",
        time: "→ Pase Mundial Niza",
      },
    ],
  },
  {
    event: "HYROX Bilbao 2024",
    flag: "🇪🇸",
    results: [
      { athletes: "José Miguel Gutiérrez", category: "Pro Men's Doubles", position: "🥇 1.º", time: "" },
      { athletes: "Eva Alonso", category: "Open Women's", position: "🥉 3.º", time: "" },
    ],
  },
  {
    event: "HYROX Río de Janeiro Nov 2025",
    flag: "🇧🇷",
    results: [
      {
        athletes: "Alejandro Hernández + Nahuel García",
        category: "Doubles Pro Men 25-29",
        position: "5.º + 13.º general",
        time: "",
      },
      {
        athletes: "Carolina Gutiérrez + Patricia Bethencourt",
        category: "Pro Doubles Women 40-44",
        position: "🥉 3.º",
        time: "12.ª general",
      },
    ],
  },
];

export default function SirocoAchievements() {
  return (
    <section
      id="logros"
      style={{
        background: "#08080A",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#FF4713",
              marginBottom: 16,
            }}
          >
            Palmarés
          </span>
          <h2
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              marginBottom: 16,
            }}
          >
            NUESTROS
            <br />
            <span style={{ color: "#FF4713" }}>LOGROS</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto" }}>
            Atletas de Siroco compitiendo en los escenarios más exigentes del mundo.
          </p>
        </div>

        {/* Highlight banners */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 48,
          }}
          className="siroco-medals-grid"
        >
          {[
            { n: "6", label: "Oros internacionales", color: "#FFB800" },
            { n: "3", label: "Platas internacionales", color: "#C0C0C0" },
            { n: "2", label: "Bronces internacionales", color: "#CD7F32" },
          ].map((m) => (
            <div
              key={m.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${m.color}33`,
                borderRadius: 14,
                padding: "24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontWeight: 900,
                  fontSize: 48,
                  color: m.color,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {m.n}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Results table */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {achievements.map((comp) => (
            <div
              key={comp.event}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {/* Event header */}
              <div
                style={{
                  background: "rgba(255,71,19,0.1)",
                  borderBottom: "1px solid rgba(255,71,19,0.2)",
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 22 }}>{comp.flag}</span>
                <span
                  style={{
                    fontFamily: "var(--font-archivo-black), sans-serif",
                    fontWeight: 900,
                    fontSize: 16,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {comp.event}
                </span>
              </div>

              {/* Results */}
              {comp.results.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 100px 80px",
                    gap: 16,
                    padding: "16px 24px",
                    borderBottom:
                      i < comp.results.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    alignItems: "center",
                  }}
                  className="siroco-result-row"
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#fff" }}>{r.athletes}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>{r.category}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }} className="siroco-result-cat">
                    {r.category}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 15,
                      color: r.position.includes("1.º") ? "#FFB800" : r.position.includes("2.º") ? "#C0C0C0" : r.position.includes("3.º") ? "#CD7F32" : "#FF4713",
                    }}
                  >
                    {r.position}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textAlign: "right" }}>
                    {r.time}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .siroco-medals-grid { grid-template-columns: 1fr !important; }
          .siroco-result-row { grid-template-columns: 1fr 80px !important; }
          .siroco-result-cat { display: none !important; }
        }
      `}</style>
    </section>
  );
}

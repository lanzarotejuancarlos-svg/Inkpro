"use client";
import React from "react";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16h4M24 16h4M8 16h16" stroke="#FF4713" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="8" cy="16" r="3" fill="none" stroke="#FF4713" strokeWidth="2" />
        <circle cx="24" cy="16" r="3" fill="none" stroke="#FF4713" strokeWidth="2" />
      </svg>
    ),
    title: "HYROX",
    tag: "Centro Oficial",
    desc: "El único centro HYROX certificado de las Islas Canarias. Prepárate para la competición de fitness más grande del mundo con nuestros protocolos oficiales.",
    accent: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26L14 10l4 8 4-5 4 13" stroke="#FF4713" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Entrenamiento Funcional",
    tag: "CrossFit · WOD",
    desc: "Sesiones de alta intensidad basadas en movimientos funcionales. Fuerza, potencia y resistencia en cada entrenamiento.",
    accent: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#FF4713" strokeWidth="2" />
        <path d="M16 10v6l4 2" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Spinning",
    tag: "Cardio Indoor",
    desc: "Clases de ciclismo indoor de alto rendimiento con instructores especializados. Quema calorías y mejora tu resistencia cardiovascular.",
    accent: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24c0-8 4-14 8-14s8 6 8 14" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18c0-4 2-7 4-7s4 3 4 7" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Yoga y Pilates",
    tag: "Mente y Cuerpo",
    desc: "Equilibra tu entrenamiento con clases de yoga y pilates. Flexibilidad, core y recuperación activa para completar tu rendimiento.",
    accent: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 22c0-6 3-10 6-10s6 4 6 10" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16h2M22 16h2M16 8v2" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="10" r="2" fill="#FF4713" />
      </svg>
    ),
    title: "Fisioterapia",
    tag: "Recuperación",
    desc: "Equipo de fisioterapeutas cualificados para lesiones deportivas, recuperación y rendimiento. Tu cuerpo lo agradecerá.",
    accent: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6L12 14H6l6 4-2 8 6-4 6 4-2-8 6-4h-6z" stroke="#FF4713" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Entrenamiento Personal",
    tag: "1 a 1",
    desc: "Sesiones individuales con entrenadores certificados. Plan personalizado, seguimiento continuo y resultados garantizados.",
    accent: false,
  },
];

export default function SirocoServices() {
  return (
    <section
      id="servicios"
      style={{
        background: "#08080A",
        padding: "100px 24px",
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
            Lo que ofrecemos
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
            <span style={{ color: "#FF4713" }}>SERVICIOS</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto" }}>
            De principiantes a atletas de élite. Todos tienen un lugar en Siroco.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="siroco-services-grid"
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: s.accent
                  ? "linear-gradient(135deg, rgba(255,71,19,0.18) 0%, rgba(255,71,19,0.06) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: s.accent ? "1px solid rgba(255,71,19,0.4)" : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "28px 26px",
                position: "relative",
                transition: "border-color .2s, transform .2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                if (!s.accent) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,71,19,0.25)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                if (!s.accent) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }
              }}
            >
              {s.accent && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "#FF4713",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  Destacado
                </div>
              )}
              <div style={{ marginBottom: 20 }}>{s.icon}</div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#FF4713",
                  marginBottom: 8,
                }}
              >
                {s.tag}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: 19,
                  color: "#fff",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .siroco-services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .siroco-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

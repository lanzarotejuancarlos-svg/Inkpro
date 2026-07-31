"use client";
import React from "react";

export default function SirocoFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#060608",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 48,
            marginBottom: 52,
          }}
          className="siroco-footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="#FF4713" />
                <path d="M8 10h20M8 18h14M8 26h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="26" cy="26" r="4" fill="#fff" />
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-archivo-black), sans-serif",
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  SIROCO
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "#FF4713",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  HYBRIDBOX
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 260 }}>
              Primer centro oficial HYROX de las Islas Canarias.
              Costa Teguise, Lanzarote.
            </p>
            <a
              href="https://www.instagram.com/hybridboxsiroco/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 20,
                color: "#FF4713",
                fontSize: 13,
                fontWeight: 600,
                transition: "opacity .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="14" height="14" rx="4" stroke="#FF4713" strokeWidth="1.5" />
                <circle cx="8" cy="8" r="3" stroke="#FF4713" strokeWidth="1.5" />
                <circle cx="12" cy="4" r="1" fill="#FF4713" />
              </svg>
              @hybridboxsiroco
            </a>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 20,
              }}
            >
              Navegación
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Inicio", href: "#top" },
                { label: "Servicios", href: "#servicios" },
                { label: "HYROX", href: "#hyrox" },
                { label: "Logros", href: "#logros" },
                { label: "Horarios", href: "#horarios" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 14,
                    transition: "color .15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 20,
              }}
            >
              Contacto
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Dirección</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                  Av. del Mar, 22 — Local 8<br />
                  35508 Costa Teguise, Lanzarote
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Teléfono</div>
                <a href="tel:928590497" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  928 590 497
                </a>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Email</div>
                <a
                  href="mailto:sirocofitnessbox@gmail.com"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", wordBreak: "break-all" }}
                >
                  sirocofitnessbox@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © {year} Siroco Fitness Box S.L. — Costa Teguise, Lanzarote
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>CIF: B02998458</span>
            <a
              href="https://hyrox.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", transition: "color .15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4713")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              HYROX Official Partner
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .siroco-footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}

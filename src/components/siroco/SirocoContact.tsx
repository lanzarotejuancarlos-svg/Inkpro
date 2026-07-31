"use client";
import React, { useState } from "react";

export default function SirocoContact() {
  const [copied, setCopied] = useState(false);

  function copyPhone() {
    navigator.clipboard.writeText("928590497").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      id="contacto"
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
            Encuéntranos
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
            ESTAMOS EN
            <br />
            <span style={{ color: "#FF4713" }}>COSTA TEGUISE</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 32,
            alignItems: "start",
          }}
          className="siroco-contact-grid"
        >
          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Address */}
            <ContactCard
              icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2C7.686 2 5 4.686 5 8c0 4.875 6 12 6 12s6-7.125 6-12c0-3.314-2.686-6-6-6z" stroke="#FF4713" strokeWidth="1.8" />
                  <circle cx="11" cy="8" r="2" stroke="#FF4713" strokeWidth="1.8" />
                </svg>
              }
              label="Dirección"
            >
              <a
                href="https://maps.google.com/?q=Av+del+Mar+22+35508+Costa+Teguise+Lanzarote"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontWeight: 600 }}
              >
                Av. del Mar, 22 — Local 8
              </a>
              <span style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 3 }}>
                35508 Costa Teguise, Lanzarote
              </span>
            </ContactCard>

            {/* Phone */}
            <ContactCard
              icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 4a1 1 0 011-1h3l1.5 4-2 1.5a11 11 0 005 5L13 11.5 17 13v3a1 1 0 01-1 1C8 17 5 9 5 5V4z" stroke="#FF4713" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              }
              label="Teléfono"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <a href="tel:928590497" style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}>
                  928 590 497
                </a>
                <button
                  onClick={copyPhone}
                  style={{
                    background: copied ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.07)",
                    border: copied ? "1px solid rgba(16,185,129,0.4)" : "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 6,
                    padding: "4px 10px",
                    color: copied ? "#10B981" : "rgba(255,255,255,0.6)",
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all .2s",
                  }}
                >
                  {copied ? "Copiado ✓" : "Copiar"}
                </button>
              </div>
            </ContactCard>

            {/* Email */}
            <ContactCard
              icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="5" width="18" height="12" rx="2" stroke="#FF4713" strokeWidth="1.8" />
                  <path d="M2 8l9 5 9-5" stroke="#FF4713" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              }
              label="Email"
            >
              <a
                href="mailto:sirocofitnessbox@gmail.com"
                style={{ color: "#fff", fontWeight: 600, wordBreak: "break-all" }}
              >
                sirocofitnessbox@gmail.com
              </a>
            </ContactCard>

            {/* Instagram */}
            <ContactCard
              icon={
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="2" width="18" height="18" rx="5" stroke="#FF4713" strokeWidth="1.8" />
                  <circle cx="11" cy="11" r="4" stroke="#FF4713" strokeWidth="1.8" />
                  <circle cx="16.5" cy="5.5" r="1" fill="#FF4713" />
                </svg>
              }
              label="Instagram"
            >
              <a
                href="https://www.instagram.com/hybridboxsiroco/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontWeight: 600 }}
              >
                @hybridboxsiroco
              </a>
              <span style={{ display: "block", color: "rgba(255,255,255,0.45)", fontSize: 13, marginTop: 3 }}>
                +2.200 seguidores
              </span>
            </ContactCard>

            {/* Hours */}
            <div
              style={{
                background: "rgba(255,71,19,0.08)",
                border: "1px solid rgba(255,71,19,0.2)",
                borderRadius: 14,
                padding: "22px",
              }}
            >
              <div style={{ fontWeight: 700, color: "#FF4713", marginBottom: 14, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Horario de apertura
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { days: "Lunes – Viernes", hours: "06:00 – 22:00" },
                  { days: "Sábado – Domingo", hours: "08:00 – 20:00" },
                ].map((h) => (
                  <div
                    key={h.days}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: 14,
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>{h.days}</span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.489!2d-13.4947!3d28.9996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc46286cb54b2b55%3A0x0!2sAv.+del+Mar%2C+22%2C+35508+Costa+Teguise%2C+Las+Palmas!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              style={{ flex: 1, minHeight: 320, border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Siroco Hybridbox — Costa Teguise, Lanzarote"
            />
            <a
              href="https://maps.google.com/?q=Av+del+Mar+22+35508+Costa+Teguise+Lanzarote"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px",
                color: "rgba(255,255,255,0.6)",
                fontSize: 13,
                fontWeight: 600,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                transition: "color .15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4713")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              Abrir en Google Maps
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .siroco-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: "rgba(255,71,19,0.1)",
          border: "1px solid rgba(255,71,19,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.1em" }}>
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

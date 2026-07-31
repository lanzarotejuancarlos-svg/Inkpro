"use client";
import React, { useEffect, useState } from "react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "HYROX", href: "#hyrox" },
  { label: "Logros", href: "#logros" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export default function SirocoNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background .3s, box-shadow .3s",
          background: scrolled ? "rgba(8,8,10,0.95)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <SirocoLogo />
            <span
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                fontWeight: 900,
                fontSize: 20,
                color: "#fff",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              SIROCO
              <span style={{ color: "#FF4713", display: "block", fontSize: 11, letterSpacing: "0.22em", fontFamily: "var(--font-archivo)", fontWeight: 600 }}>
                HYBRIDBOX
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="siroco-navlinks">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  transition: "color .15s",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              style={{
                background: "#FF4713",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "background .18s, transform .18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff5c2e";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FF4713";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Únete
            </a>
          </div>

          {/* Burger */}
          <button
            className="siroco-burger"
            onClick={() => setOpen(!open)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              padding: 8,
              cursor: "pointer",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#fff",
                  borderRadius: 2,
                  transition: "transform .2s, opacity .2s",
                  transform:
                    open && i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : open && i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : open && i === 1
                      ? "scaleX(0)"
                      : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(8,8,10,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
          className="siroco-drawer"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: 900,
                fontFamily: "var(--font-archivo-black), sans-serif",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            style={{
              background: "#FF4713",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 18,
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Únete
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .siroco-navlinks { display: none !important; }
          .siroco-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function SirocoLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill="#FF4713" />
      <path d="M8 10h20M8 18h14M8 26h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="26" cy="26" r="4" fill="#fff" />
    </svg>
  );
}

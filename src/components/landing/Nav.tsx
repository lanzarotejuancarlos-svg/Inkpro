"use client";
import React, { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";

interface NavProps {
  onApp: () => void;
}

export default function Nav({ onApp }: NavProps) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const s = () => setSolid(window.scrollY > 20);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  const links = [
    ["Comparador", "#comparador"],
    ["Cómo funciona", "#como"],
    ["Precios", "#precios"],
    ["FAQ", "#faq"],
  ];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      transition: "background .3s, border-color .3s",
      background: solid ? "rgba(10,10,11,.82)" : "transparent",
      backdropFilter: solid ? "blur(14px)" : "none",
      borderBottom: `1px solid ${solid ? "var(--border)" : "transparent"}`,
    }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <a href="#top"><Logo /></a>

        <nav style={{ display: "flex", gap: 30 }} className="lw-navlinks">
          {links.map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: 14.5, color: "var(--text-2)", fontWeight: 500 }} className="lw-navlink">
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onApp} className="btn btn-ghost btn-sm lw-hide-sm">Iniciar sesión</button>
          <button onClick={onApp} className="btn btn-primary btn-sm">Prueba 3 gratis</button>
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-icon btn-subtle lw-only-sm"
            aria-label="Menú"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lw-only-sm" style={{
          borderTop: "1px solid var(--border)", padding: "12px 24px 18px",
          display: "flex", flexDirection: "column", gap: 4, background: "var(--bg)"
        }}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              style={{ padding: "11px 4px", color: "var(--text-2)", fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

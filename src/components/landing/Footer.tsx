"use client";
import React from "react";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";

const cols = [
  ["Producto", ["Comparador", "Estilos", "App móvil", "Precios", "Novedades"]],
  ["Soporte", ["Centro de ayuda", "Guía DO/DON'T", "Contacto", "Estado del servicio"]],
  ["Legal", ["Términos", "Privacidad", "Cookies", "Licencias"]],
] as const;

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "56px 0 40px" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 32 }} className="footer-grid">
          <div>
            <Logo />
            <p style={{ color: "var(--text-3)", fontSize: 14.5, marginTop: 16, maxWidth: 280, lineHeight: 1.6 }}>
              Stencils profesionales con IA. Hecho por y para tatuadores.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {["instagram", "play"].map(ic => (
                <a key={ic} href="#" className="btn btn-icon btn-subtle">
                  <Icon name={ic} size={18} />
                </a>
              ))}
            </div>
          </div>
          {cols.map(([title, items]) => (
            <div key={title}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 16 }}>
                {title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {items.map(it => (
                  <li key={it}>
                    <a href="#" style={{ color: "var(--text-2)", fontSize: 14.5 }} className="lw-foot">{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          marginTop: 44, paddingTop: 24, borderTop: "1px solid var(--border)",
          color: "var(--text-4)", fontSize: 13,
        }}>
          <span>© 2026 Linework. Todos los derechos reservados.</span>
          <span className="mono">Hecho con tinta y código.</span>
        </div>
      </div>
    </footer>
  );
}

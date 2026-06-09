"use client";
import React from "react";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import type { AppCtx } from "./types";

const NAV = [
  { id: "dashboard", icon: "plus", label: "Crear" },
  { id: "gallery", icon: "grid", label: "Galería" },
  { id: "settings", icon: "creditCard", label: "Plan" },
];

export default function AppShell({ ctx, children }: { ctx: AppCtx; children: React.ReactNode }) {
  const active = ["editor", "processing", "export"].includes(ctx.screen) ? "dashboard" : ctx.screen;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--bg)" }}>
      {/* Sidebar (desktop) */}
      <aside className="app-sidebar" style={{
        width: 244, flexShrink: 0, borderRight: "1px solid var(--border)",
        padding: "22px 16px", display: "flex", flexDirection: "column",
        position: "sticky", top: 0, height: "100vh",
      }}>
        <div style={{ padding: "4px 8px 26px" }}>
          <Logo size={20} />
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => ctx.setScreen(n.id)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "11px 12px", borderRadius: 10, border: "none", cursor: "pointer",
                background: active === n.id ? "var(--acc-soft)" : "transparent",
                color: active === n.id ? "var(--acc-bright)" : "var(--text-2)",
                fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 14.5, textAlign: "left",
                boxShadow: active === n.id ? "inset 0 0 0 1px var(--acc-line)" : "none",
                transition: "all .15s",
              }}
            >
              <Icon name={n.icon} size={20} />
              {n.label}
            </button>
          ))}
        </nav>
        <button
          onClick={ctx.onExit}
          style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "11px 12px", borderRadius: 10, border: "none", cursor: "pointer",
            background: "transparent", color: "var(--text-3)",
            fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 14.5,
            transition: "color .15s",
          }}
        >
          <Icon name="arrowLeft" size={20} />
          Salir
        </button>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "auto" }}>
        {/* Top bar (mobile) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--border)" }}>
          <div className="app-logo-sm">
            <Logo size={18} />
          </div>
          <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 16 }}>
            {ctx.screen === "dashboard" ? "Crear" : ctx.screen === "gallery" ? "Galería" : ctx.screen === "settings" ? "Plan" : ctx.screen === "editor" ? "Editor" : ctx.screen === "processing" ? "Generando" : "Exportar"}
          </div>
          <div className="badge badge-acc">
            {ctx.credits} créditos
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {children}
        </div>

        {/* Bottom nav (mobile) */}
        <nav className="app-bottomnav" style={{
          display: "none", alignItems: "stretch",
          position: "sticky", bottom: 0, zIndex: 30,
          background: "rgba(10,10,11,.92)", backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border)",
        }}>
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => ctx.setScreen(n.id)}
              style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                gap: 4, padding: "12px 8px", border: "none", cursor: "pointer",
                background: "transparent",
                color: active === n.id ? "var(--acc-bright)" : "var(--text-3)",
                fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 11,
                transition: "color .15s",
              }}
            >
              <Icon name={n.icon} size={22} />
              {n.label}
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}

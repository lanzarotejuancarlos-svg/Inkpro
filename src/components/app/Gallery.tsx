"use client";
import React from "react";
import Icon from "../ui/Icon";
import type { AppCtx } from "./types";

function stencilFilter(style: string): string {
  if (style === "Outline") return "grayscale(1) contrast(3.5) brightness(1.1)";
  if (style === "Hatching") return "grayscale(1) contrast(2.8) brightness(1.08) saturate(0)";
  return "grayscale(1) contrast(2.2) brightness(1.05)";
}

export default function Gallery({ ctx }: { ctx: AppCtx }) {
  return (
    <div style={{ padding: "28px 24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 800 }}>Galería</h2>
        <p style={{ margin: "6px 0 0", color: "var(--text-3)", fontSize: 14.5 }}>{ctx.gallery.length} stencils generados</p>
      </div>

      {ctx.gallery.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 0", color: "var(--text-3)" }}>
          <Icon name="grid" size={40} style={{ margin: "0 auto 16px", opacity: 0.3 }} />
          <div style={{ fontSize: 16, fontWeight: 600 }}>Sin stencils todavía</div>
          <div style={{ fontSize: 14, marginTop: 8 }}>Genera tu primer stencil en la pantalla Crear</div>
          <button onClick={() => ctx.setScreen("dashboard")} className="btn btn-primary" style={{ marginTop: 20 }}>
            <Icon name="plus" size={18} />
            Crear stencil
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {ctx.gallery.map(item => (
            <div key={item.id} className="card lw-galcard" style={{ overflow: "hidden", position: "relative" }}>
              <div style={{ aspectRatio: "1", background: "#f3efe6", position: "relative" }}>
                {item.src ? (
                  <img src={item.src} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: stencilFilter(item.style) }}/>
                ) : (
                  <div style={{ width: "100%", height: "100%", background: item.bgColor, filter: stencilFilter(item.style) }}/>
                )}
                {/* Hover overlay */}
                <div className="lw-galov" style={{ position: "absolute", inset: 0, background: "rgba(10,10,11,.6)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, opacity: 0 }}>
                  <button className="btn btn-subtle btn-sm" onClick={() => ctx.setScreen("editor")}>
                    <Icon name="eye" size={15} />
                  </button>
                  <button className="btn btn-subtle btn-sm" onClick={() => ctx.removeItem(item.id)}>
                    <Icon name="trash" size={15} style={{ color: "var(--err)" }} />
                  </button>
                </div>
              </div>
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 13.5 }}>{item.name}</div>
                <div style={{ fontSize: 11.5, color: "var(--text-3)", fontFamily: "var(--font-mono)", marginTop: 3 }}>{item.style}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

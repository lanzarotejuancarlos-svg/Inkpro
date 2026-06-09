"use client";
import React, { useState } from "react";
import Icon from "../ui/Icon";
import Segmented from "../ui/Segmented";
import type { AppCtx } from "./types";

const FORMATS = ["PNG", "PDF", "JPG"];
const SIZES = ["A4", "A3", "10×15cm", "Tamaño real"];

export default function ExportScreen({ ctx }: { ctx: AppCtx }) {
  const [format, setFormat] = useState("PNG");
  const [size, setSize] = useState("A4");
  const [transparent, setTransparent] = useState(false);

  return (
    <div style={{ padding: "32px 28px", maxWidth: 560, margin: "0 auto" }}>
      <h2 style={{ margin: "0 0 24px", fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 800 }}>Exportar stencil</h2>

      {/* Preview */}
      <div style={{ borderRadius: "var(--r-lg)", overflow: "hidden", aspectRatio: "4/3", background: "#f3efe6", marginBottom: 24, position: "relative" }}>
        {ctx.image ? (
          <img src={ctx.image} alt="stencil" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "grayscale(1) contrast(2.2) brightness(1.05)" }}/>
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)", filter: "grayscale(1) contrast(2.2) brightness(1.05)" }}/>
        )}
        <span style={{ position: "absolute", top: 12, right: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", padding: "5px 10px", borderRadius: 999, background: "rgba(10,10,11,.7)", color: "var(--acc-bright)", border: "1px solid var(--acc-line)", backdropFilter: "blur(6px)" }}>
          Vista previa
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>Formato</div>
          <Segmented options={FORMATS} value={format} onChange={setFormat} full />
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 10 }}>Tamaño de impresión</div>
          <Segmented options={SIZES} value={size} onChange={setSize} full />
        </div>

        {format !== "JPG" && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "var(--r-sm)", background: "var(--surface-2)", border: "1px solid var(--border)" }}>
            <span style={{ fontSize: 14.5, color: "var(--text-2)" }}>Fondo transparente</span>
            <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <input type="checkbox" checked={transparent} onChange={e => setTransparent(e.target.checked)} style={{ accentColor: "var(--acc)", width: 16, height: 16 }}/>
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>{transparent ? "Activado" : "Desactivado"}</span>
            </label>
          </div>
        )}
      </div>

      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }}>
          <Icon name="download" size={20} />
          Descargar {format}
        </button>
        <button onClick={() => ctx.setScreen("editor")} className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "center" }}>
          <Icon name="arrowLeft" size={16} />
          Volver al editor
        </button>
      </div>
    </div>
  );
}

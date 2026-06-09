"use client";
import React, { useState, useRef, useEffect } from "react";
import Icon from "../ui/Icon";
import Segmented from "../ui/Segmented";
import Toggle from "../ui/Toggle";
import RangeSlider from "../ui/RangeSlider";
import type { AppCtx } from "./types";

const STYLES = ["Outline", "Standard", "Hatching"];
const RECOLORS = ["Negro", "Azul", "Burdeos", "Verde"];
const BG_SAMPLE = "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)";

function stencilFilter(style: string, recolor: string): string {
  const base = style === "Outline" ? "grayscale(1) contrast(3.5) brightness(1.1)"
    : style === "Hatching" ? "grayscale(1) contrast(2.8) brightness(1.08) saturate(0)"
    : "grayscale(1) contrast(2.2) brightness(1.05)";

  const recolorFilter = recolor === "Azul" ? " sepia(1) hue-rotate(175deg) saturate(3.2) brightness(.95)"
    : recolor === "Burdeos" ? " sepia(1) hue-rotate(-30deg) saturate(4) brightness(.92)"
    : recolor === "Verde" ? " sepia(1) hue-rotate(70deg) saturate(2.4) brightness(.95)"
    : "";

  return base + recolorFilter;
}

export default function Editor({ ctx }: { ctx: AppCtx }) {
  const [style, setStyle] = useState("Standard");
  const [detail, setDetail] = useState(62);
  const [contrast, setContrast] = useState(54);
  const [transparent, setTransparent] = useState(false);
  const [recolor, setRecolor] = useState("Negro");
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function onMove(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }

  useEffect(() => {
    if (!drag) return;
    const mv = (e: PointerEvent) => onMove(e.clientX);
    const up = () => setDrag(false);
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
  }, [drag]);

  const src = ctx.image || undefined;

  return (
    <div className="editor-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 380px", minHeight: "calc(100vh - 64px)" }}>
      {/* Canvas */}
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          ref={ref}
          onPointerDown={(e) => { setDrag(true); onMove(e.clientX); }}
          style={{
            position: "relative", borderRadius: "var(--r-lg)", overflow: "hidden",
            flex: 1, minHeight: 300,
            background: transparent ? "repeating-conic-gradient(#3a3a3a 0% 25%, #2a2a2a 0% 50%) 0 0 / 16px 16px" : "#f3efe6",
            cursor: "ew-resize", userSelect: "none", touchAction: "none",
          }}
        >
          {/* Stencil side */}
          <div style={{ position: "absolute", inset: 0 }}>
            {src ? (
              <img src={src} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "contain", filter: stencilFilter(style, recolor) }}/>
            ) : (
              <div style={{ width: "100%", height: "100%", background: BG_SAMPLE, filter: stencilFilter(style, recolor) }}/>
            )}
            {style === "Hatching" && (
              <div style={{ position: "absolute", inset: 0, mixBlendMode: "multiply", opacity: 0.5, backgroundImage: "repeating-linear-gradient(45deg, rgba(20,20,20,.5) 0 1px, transparent 1px 5px)" }}/>
            )}
          </div>

          {/* Original side (clipped) */}
          <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            {src ? (
              <img src={src} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
            ) : (
              <div style={{ width: "100%", height: "100%", background: BG_SAMPLE }}/>
            )}
          </div>

          {/* Labels */}
          {[["left", "Original"], ["right", `Stencil · ${style}`]].map(([side, label]) => (
            <span key={side} style={{
              position: "absolute", top: 12, [side]: 12, zIndex: 2,
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase",
              padding: "5px 10px", borderRadius: 999, background: "rgba(10,10,11,.7)",
              color: side === "right" ? "var(--acc-bright)" : "#fff",
              border: `1px solid ${side === "right" ? "var(--acc-line)" : "rgba(255,255,255,.15)"}`,
              backdropFilter: "blur(6px)", pointerEvents: "none",
            }}>
              {label}
            </span>
          ))}

          {/* Handle */}
          <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "var(--acc)", boxShadow: "0 0 12px var(--acc)", transform: "translateX(-1px)", pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 38, height: 38, borderRadius: 999, background: "var(--acc)", color: "var(--on-acc)", display: "grid", placeItems: "center", boxShadow: "var(--glow)", pointerEvents: "auto", cursor: "ew-resize" }}>
              <Icon name="sliders" size={18}/>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Panel */}
      <div className="editor-panel" style={{ borderLeft: "1px solid var(--border)", padding: "24px 22px", display: "flex", flexDirection: "column", gap: 24, overflowY: "auto" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 12 }}>Estilo</div>
          <Segmented options={STYLES} value={style} onChange={setStyle} full />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <RangeSlider value={detail} onChange={setDetail} label="Detalle" suffix="%" />
          <RangeSlider value={contrast} onChange={setContrast} label="Contraste" suffix="%" />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "var(--text-2)" }}>Fondo transparente</span>
          <Toggle checked={transparent} onChange={setTransparent} />
        </div>

        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 12 }}>Recolor</div>
          <select className="select" value={recolor} onChange={e => setRecolor(e.target.value)}>
            {RECOLORS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          <button onClick={() => ctx.setScreen("export")} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            <Icon name="download" size={18} />
            Exportar
          </button>
          <button onClick={() => ctx.setScreen("dashboard")} className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "center" }}>
            <Icon name="arrowLeft" size={16} />
            Nuevo stencil
          </button>
        </div>
      </div>
    </div>
  );
}

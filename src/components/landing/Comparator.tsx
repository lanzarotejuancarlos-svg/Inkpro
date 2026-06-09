"use client";
import React, { useState, useRef, useEffect } from "react";
import Segmented from "../ui/Segmented";
import Icon from "../ui/Icon";

const STYLES = ["Outline", "Standard", "Hatching"];
const CATS = ["Retrato", "Animal", "Naturaleza", "Realismo"];

const SAMPLE_COLORS = [
  "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)",
  "linear-gradient(135deg, #6b8f71 0%, #3d5a40 100%)",
  "linear-gradient(135deg, #7a9db5 0%, #4a6b80 100%)",
  "linear-gradient(135deg, #b58a6b 0%, #7a5a40 100%)",
];

function stencilFilter(style: string): React.CSSProperties {
  if (style === "Outline") return { filter: "grayscale(1) contrast(3.5) brightness(1.1)" };
  if (style === "Hatching") return { filter: "grayscale(1) contrast(2.8) brightness(1.08) saturate(0)" };
  return { filter: "grayscale(1) contrast(2.2) brightness(1.05)" };
}

function badgeFloat(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute", top: 12, [side]: 12, zIndex: 2,
    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase",
    padding: "5px 10px", borderRadius: 999, background: "rgba(10,10,11,.7)",
    color: side === "right" ? "var(--acc-bright)" : "#fff",
    border: `1px solid ${side === "right" ? "var(--acc-line)" : "rgba(255,255,255,.15)"}`,
    backdropFilter: "blur(6px)",
    pointerEvents: "none" as const,
  };
}

export default function Comparator({ compact = false }: { compact?: boolean }) {
  const [cat, setCat] = useState(0);
  const [style, setStyle] = useState("Standard");
  const [pos, setPos] = useState(52);
  const [drag, setDrag] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploads, setUploads] = useState<Record<number, string>>({});

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

  const bgColor = uploads[cat] ? undefined : SAMPLE_COLORS[cat];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Category chips */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {CATS.map((c, i) => (
          <button
            key={c}
            onClick={() => setCat(i)}
            style={{
              border: `1px solid ${i === cat ? "var(--acc-line)" : "var(--border)"}`,
              background: i === cat ? "var(--acc-soft)" : "var(--surface)",
              color: i === cat ? "var(--acc-bright)" : "var(--text-2)",
              padding: "8px 14px", borderRadius: 999, cursor: "pointer",
              fontSize: 13.5, fontWeight: 600, fontFamily: "var(--font-head)", transition: "all .18s",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Comparator frame */}
      <div
        ref={ref}
        className="lum"
        onPointerDown={(e) => { setDrag(true); onMove(e.clientX); }}
        style={{
          position: "relative", width: "100%",
          aspectRatio: compact ? "4/3" : "16/11",
          borderRadius: "var(--r-lg)", overflow: "hidden",
          cursor: "ew-resize", userSelect: "none",
          background: "#dfdacd", touchAction: "none",
          boxShadow: "var(--sh-2)", transition: "box-shadow .2s",
        }}
      >
        {/* After (stencil) */}
        <div style={{
          position: "absolute", inset: 0,
          background: uploads[cat] ? "#f3efe6" : SAMPLE_COLORS[cat],
        }}>
          {uploads[cat] ? (
            <img
              src={uploads[cat]}
              alt="stencil"
              draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover", ...stencilFilter(style) }}
            />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              background: bgColor,
              ...stencilFilter(style),
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(0,0,0,.3)" }}/>
            </div>
          )}
          {style === "Hatching" && (
            <div style={{
              position: "absolute", inset: 0, mixBlendMode: "multiply", opacity: 0.5,
              backgroundImage: "repeating-linear-gradient(45deg, rgba(20,20,20,.5) 0 1px, transparent 1px 5px)",
            }}/>
          )}
        </div>

        {/* Before (original) */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {uploads[cat] ? (
            <img src={uploads[cat]} alt="original" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
          ) : (
            <div style={{ width: "100%", height: "100%", background: bgColor }}/>
          )}
        </div>

        {/* Labels */}
        <span style={badgeFloat("left")}>Original</span>
        <span style={badgeFloat("right")}>Stencil · {style}</span>

        {/* Handle */}
        <div style={{
          position: "absolute", top: 0, bottom: 0,
          left: `${pos}%`, width: 2,
          background: "var(--acc)", boxShadow: "0 0 12px var(--acc)",
          transform: "translateX(-1px)",
          pointerEvents: "none",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 42, height: 42, borderRadius: 999,
            background: "var(--acc)", color: "var(--on-acc)",
            display: "grid", placeItems: "center",
            boxShadow: "var(--glow)", cursor: "ew-resize",
            pointerEvents: "auto",
          }}>
            <Icon name="sliders" size={20} />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <Segmented options={STYLES} value={style} onChange={setStyle} size="sm" />
        <button className="btn btn-subtle btn-sm" onClick={() => fileRef.current?.click()}>
          <Icon name="upload" size={16} />
          Probar con mi foto
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const r = new FileReader();
            r.onload = () => setUploads(prev => ({ ...prev, [cat]: r.result as string }));
            r.readAsDataURL(file);
          }}
        />
      </div>
    </div>
  );
}

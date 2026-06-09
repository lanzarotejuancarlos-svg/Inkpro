"use client";
import React, { useRef, useState } from "react";
import Icon from "../ui/Icon";
import type { AppCtx } from "./types";

const SAMPLES = [
  { label: "Retrato", bg: "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)" },
  { label: "Animal", bg: "linear-gradient(135deg, #6b8f71 0%, #3d5a40 100%)" },
  { label: "Naturaleza", bg: "linear-gradient(135deg, #7a9db5 0%, #4a6b80 100%)" },
  { label: "Realismo", bg: "linear-gradient(135deg, #b58a6b 0%, #7a5a40 100%)" },
];

export default function Dashboard({ ctx }: { ctx: AppCtx }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const r = new FileReader();
    r.onload = () => ctx.startProcessing(r.result as string);
    r.readAsDataURL(file);
  }

  return (
    <div style={{ padding: "32px 28px", maxWidth: 680, margin: "0 auto" }}>
      <div
        className="lum"
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
        onClick={() => fileRef.current?.click()}
        style={{
          borderRadius: "var(--r-xl)", padding: "52px 32px",
          textAlign: "center", cursor: "pointer",
          background: over ? "var(--acc-soft)" : "var(--surface)",
          border: `2px dashed ${over ? "var(--acc)" : "var(--border-strong)"}`,
          transition: "all .2s",
          boxShadow: over ? "var(--glow)" : "none",
        }}
      >
        <div style={{
          width: 68, height: 68, borderRadius: "var(--r-lg)",
          background: "var(--acc-soft)", border: "1px solid var(--acc-line)",
          color: "var(--acc-bright)", display: "grid", placeItems: "center", margin: "0 auto 20px",
        }}>
          <Icon name="upload" size={28} />
        </div>
        <div style={{ fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
          Arrastra tu foto aquí
        </div>
        <div style={{ color: "var(--text-3)", fontSize: 14.5 }}>
          o haz clic para seleccionar · JPG, PNG, HEIC
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}/>
      </div>

      <div style={{ marginTop: 32 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 14 }}>
          O usa una muestra
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
          {SAMPLES.map((s) => (
            <button
              key={s.label}
              onClick={() => ctx.startProcessing("")}
              style={{
                border: "1px solid var(--border)", borderRadius: "var(--r)",
                overflow: "hidden", cursor: "pointer", background: "none",
                display: "flex", flexDirection: "column", gap: 0,
                transition: "border-color .2s, transform .18s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--acc-line)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <div style={{ aspectRatio: "1", background: s.bg, filter: "grayscale(1) contrast(2.2)" }}/>
              <div style={{ padding: "8px 10px", fontSize: 12.5, fontWeight: 600, fontFamily: "var(--font-head)", color: "var(--text-2)", background: "var(--surface)", textAlign: "left" }}>
                {s.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      <p style={{ marginTop: 28, fontSize: 13.5, color: "var(--text-3)", lineHeight: 1.6, textAlign: "center" }}>
        Cada stencil consume 1 crédito. Tienes <strong style={{ color: "var(--acc-bright)" }}>{ctx.credits} créditos</strong> disponibles.
      </p>
    </div>
  );
}

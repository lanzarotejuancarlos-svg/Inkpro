"use client";
import React, { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import type { AppCtx } from "./types";

const STEPS = ["Analizando la imagen", "Detectando bordes", "Generando trazado", "Optimizando líneas"];

export default function Processing({ ctx }: { ctx: AppCtx }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const intervals = STEPS.map((_, i) =>
      setTimeout(() => setStep(i + 1), (i + 1) * 600)
    );
    const done = setTimeout(() => ctx.finishProcessing(), STEPS.length * 600 + 400);
    return () => { intervals.forEach(clearTimeout); clearTimeout(done); };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 500, padding: 40, gap: 32 }}>
      {/* Spinner */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ animation: "spin 1.2s linear infinite" }}>
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--surface-3)" strokeWidth="6"/>
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--acc)" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 154"/>
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
          <Icon name="spark" size={26} style={{ color: "var(--acc)", animation: "pulse-glow 1.5s ease-in-out infinite" }}/>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>
          Generando tu stencil...
        </div>
        <div style={{ color: "var(--text-3)", fontSize: 14.5 }}>Esto suele tardar menos de 30 segundos</div>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 320 }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14.5 }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
              display: "grid", placeItems: "center",
              background: step > i ? "var(--ok)" : step === i ? "var(--acc-soft)" : "var(--surface-2)",
              border: `1px solid ${step > i ? "var(--ok)" : step === i ? "var(--acc-line)" : "var(--border)"}`,
              transition: "all .3s",
            }}>
              {step > i ? (
                <Icon name="check" size={13} style={{ color: "#0A0A0B" }}/>
              ) : step === i ? (
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--acc)", animation: "pulse-glow 1s infinite" }}/>
              ) : null}
            </div>
            <span style={{ color: step > i ? "var(--text)" : step === i ? "var(--text-2)" : "var(--text-3)" }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

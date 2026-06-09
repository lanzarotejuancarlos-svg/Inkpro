"use client";
import React from "react";
import Icon from "../ui/Icon";
import Comparator from "./Comparator";

interface HeroProps {
  onApp: () => void;
}

export default function Hero({ onApp }: HeroProps) {
  return (
    <section id="top" style={{ position: "relative", paddingTop: 40, paddingBottom: 64, overflow: "hidden" }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: -160, left: "10%",
        width: 520, height: 520,
        background: "radial-gradient(circle, rgba(244,183,64,.16), transparent 65%)",
        filter: "blur(20px)", pointerEvents: "none",
      }}/>
      {/* Fine line texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.025) 0 1px, transparent 1px 56px)",
        pointerEvents: "none",
        maskImage: "linear-gradient(180deg,#000,transparent 70%)",
      }}/>

      <div style={{
        width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1.02fr 1fr",
        gap: 56,
        alignItems: "center",
      }} className="hero-grid">
        {/* Left: copy */}
        <div className="hero-copy rise">
          <div className="badge badge-acc" style={{ marginBottom: 26 }}>
            <span className="dot"/>
            Sin tarjeta · 3 stencils gratis
          </div>
          <h1 className="display" style={{ fontSize: "clamp(40px, 5.6vw, 72px)", margin: 0 }}>
            Convierte cualquier foto en un{" "}
            <span style={{ color: "var(--acc)" }}>stencil perfecto</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-2)", maxWidth: 460, marginTop: 22, lineHeight: 1.6 }}>
            Líneas limpias, listas para imprimir y transferir. Hecho por tatuadores, para tatuadores — con precios honestos y sin letra pequeña.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
            <button onClick={onApp} className="btn btn-primary btn-lg">
              <Icon name="spark" size={19} />
              Prueba 3 gratis
            </button>
            <a href="#comparador" className="btn btn-ghost btn-lg">
              <Icon name="eye" size={19} />
              Ver ejemplos
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 34, color: "var(--text-3)", fontSize: 13.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name="star" size={15} style={{ color: "var(--acc)" }} />
              <strong style={{ color: "var(--text-2)" }}>4.9</strong>/5 · 1.2k tatuadores
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Icon name="bolt" size={15} style={{ color: "var(--acc)" }} />
              ~30s por stencil
            </div>
          </div>
        </div>

        {/* Right: Comparator */}
        <div className="hero-cmp rise" style={{ animationDelay: ".1s" }}>
          <Comparator />
        </div>
      </div>
    </section>
  );
}

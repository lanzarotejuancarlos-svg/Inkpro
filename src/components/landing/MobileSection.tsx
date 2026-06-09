"use client";
import React from "react";
import Icon from "../ui/Icon";

function PhoneMini() {
  return (
    <div style={{
      width: 210, height: 420, borderRadius: 36,
      border: "1px solid var(--border-strong)", background: "var(--bg)",
      boxShadow: "var(--sh-3)", padding: 10, position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)",
        width: 60, height: 5, borderRadius: 999, background: "var(--surface-3)",
      }}/>
      <div style={{ width: "100%", height: "100%", borderRadius: 28, overflow: "hidden", background: "#f3efe6", position: "relative" }}>
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(135deg, #c9a87c 0%, #8b6b4a 100%)",
          filter: "grayscale(1) contrast(2.2) brightness(1.05)",
        }}/>
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, padding: 14,
          background: "linear-gradient(transparent, rgba(10,10,11,.9))",
          display: "flex", gap: 8,
        }}>
          <div style={{
            flex: 1, height: 38, borderRadius: 10, background: "var(--acc)", color: "var(--on-acc)",
            display: "grid", placeItems: "center",
            fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 13,
          }}>
            Descargar
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreBadge({ icon, top, bottom }: { icon: string; top: string; bottom: string }) {
  return (
    <a href="#" className="btn btn-subtle btn-lg" style={{ padding: "12px 22px", gap: 13 }}>
      <Icon name={icon} size={26} />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, textAlign: "left" }}>
        <span style={{ fontSize: 11, color: "var(--text-3)", fontWeight: 500 }}>{top}</span>
        <span style={{ fontSize: 16, fontFamily: "var(--font-head)", fontWeight: 700 }}>{bottom}</span>
      </span>
    </a>
  );
}

export default function MobileSection() {
  return (
    <section style={{ padding: "84px 0" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div className="lum" style={{
          borderRadius: "var(--r-xl)", padding: "clamp(32px,5vw,56px)",
          background: "linear-gradient(120deg, var(--surface), var(--bg-2))",
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40,
          alignItems: "center", overflow: "hidden", position: "relative",
        }}>
          <div style={{ position: "absolute", right: -80, top: -80, width: 300, height: 300, background: "radial-gradient(circle, rgba(244,183,64,.14), transparent 65%)", filter: "blur(10px)" }}/>
          <div style={{ position: "relative" }}>
            <span className="eyebrow">En tu bolsillo</span>
            <h2 className="display" style={{ fontSize: "clamp(28px,3.6vw,42px)", margin: 0, maxWidth: 460 }}>
              Genera stencils desde la camilla
            </h2>
            <p style={{ color: "var(--text-2)", fontSize: 16.5, marginTop: 16, maxWidth: 440 }}>
              La misma potencia en iOS y Android. Captura, ajusta y manda a imprimir sin levantarte.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
              <StoreBadge icon="apple" top="Descárgalo en" bottom="App Store" />
              <StoreBadge icon="google" top="Disponible en" bottom="Google Play" />
            </div>
          </div>
          <div className="lw-hide-sm" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <PhoneMini />
          </div>
        </div>
      </div>
    </section>
  );
}

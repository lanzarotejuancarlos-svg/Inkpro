"use client";
import React from "react";
import Icon from "../ui/Icon";

export default function FinalCTA({ onApp }: { onApp: () => void }) {
  return (
    <section style={{ padding: "30px 0 90px" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div className="lum" style={{
          position: "relative", borderRadius: "var(--r-xl)",
          padding: "clamp(40px,6vw,72px) 32px", textAlign: "center",
          overflow: "hidden",
          background: "radial-gradient(circle at 50% 0%, rgba(244,183,64,.12), var(--surface) 60%)",
        }}>
          <h2 className="display" style={{ fontSize: "clamp(32px,5vw,58px)", margin: "0 auto", maxWidth: 640 }}>
            Tu próximo stencil está a 30 segundos
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 18, marginTop: 18 }}>
            Sin tarjeta. Sin letra pequeña. Solo trazo limpio.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
            <button onClick={onApp} className="btn btn-primary btn-lg">
              <Icon name="spark" size={19} />
              Prueba 3 gratis
            </button>
            <a href="#precios" className="btn btn-ghost btn-lg">
              Ver precios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

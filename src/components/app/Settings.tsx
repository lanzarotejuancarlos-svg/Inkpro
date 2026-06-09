"use client";
import React from "react";
import Icon from "../ui/Icon";
import type { AppCtx } from "./types";

export default function Settings({ ctx }: { ctx: AppCtx }) {
  return (
    <div style={{ padding: "28px 24px", maxWidth: 640, margin: "0 auto" }}>
      <h2 style={{ margin: "0 0 24px", fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 800 }}>Plan y facturación</h2>

      {/* Current plan */}
      <div className="card lum" style={{ padding: "24px 26px", marginBottom: 20, borderColor: "var(--acc-line)", background: "linear-gradient(180deg, rgba(244,183,64,.06), var(--surface))" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--acc)", marginBottom: 8 }}>Plan actual</div>
            <div style={{ fontFamily: "var(--font-head)", fontSize: 24, fontWeight: 800 }}>Hobby</div>
            <div style={{ color: "var(--text-3)", fontSize: 14, marginTop: 4 }}>Gratis · 3 stencils de muestra</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-head)", fontSize: 36, fontWeight: 800, color: "var(--acc)" }}>{ctx.credits}</div>
            <div style={{ color: "var(--text-3)", fontSize: 13 }}>créditos restantes</div>
          </div>
        </div>
        <div style={{ marginTop: 20, height: 6, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(ctx.credits / 3) * 100}%`, background: "var(--acc)", borderRadius: 999, transition: "width .3s", boxShadow: "var(--glow-sm)" }}/>
        </div>
        <div style={{ fontSize: 12.5, color: "var(--text-3)", marginTop: 8 }}>{ctx.credits} de 3 créditos usados</div>
      </div>

      {/* Upgrade cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          { name: "Pro", price: "€24", per: "/mes", stencils: 80, feat: ["Upscale 4K", "Sin marca de agua", "Historial ilimitado"], acc: true },
          { name: "Studio", price: "€59", per: "/mes", stencils: 250, feat: ["Hasta 5 artistas", "Carpetas por cliente", "Soporte prioritario"], acc: false },
        ].map(plan => (
          <div key={plan.name} className={plan.acc ? "card lum" : "card"} style={{
            padding: "22px 20px",
            borderColor: plan.acc ? "var(--acc-line)" : "var(--border)",
            background: plan.acc ? "linear-gradient(180deg, rgba(244,183,64,.06), var(--surface))" : "var(--surface)",
          }}>
            <div style={{ fontFamily: "var(--font-head)", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{plan.name}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28 }}>{plan.price}</span>
              <span style={{ color: "var(--text-3)", fontSize: 13 }}>{plan.per}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 8 }}>
              <li style={{ display: "flex", gap: 9, fontSize: 13.5, color: "var(--text-2)" }}>
                <Icon name="check" size={15} style={{ color: "var(--acc)", flexShrink: 0 }} />
                {plan.stencils} stencils/mes
              </li>
              {plan.feat.map(f => (
                <li key={f} style={{ display: "flex", gap: 9, fontSize: 13.5, color: "var(--text-2)" }}>
                  <Icon name="check" size={15} style={{ color: "var(--acc)", flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`btn ${plan.acc ? "btn-primary" : "btn-subtle"} btn-sm`} style={{ width: "100%", justifyContent: "center" }}>
              Cambiar a {plan.name}
            </button>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 20, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
        <Icon name="shield" size={20} style={{ color: "var(--acc)", flexShrink: 0, marginTop: 1 }} />
        <p style={{ margin: 0, fontSize: 13.5, color: "var(--text-3)", lineHeight: 1.6 }}>
          Cancela cuando quieras. Los stencils ya generados son tuyos para siempre.
        </p>
      </div>
    </div>
  );
}

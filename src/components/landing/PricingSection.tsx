"use client";
import React, { useState } from "react";
import Toggle from "../ui/Toggle";
import Icon from "../ui/Icon";

const PLANS = [
  { id: "hobby", name: "Hobby", mo: 9, yr: 7, stencils: 20, per: "0,45", feat: ["20 stencils al mes", "Outline · Standard · Hatching", "Export PNG + PDF a tamaño real", "Fondo transparente"], rec: false },
  { id: "pro", name: "Pro", mo: 24, yr: 19, stencils: 80, per: "0,30", feat: ["80 stencils al mes", "Todo lo de Hobby", "Upscale 4K + recolor", "Sin marca de agua", "Historial ilimitado"], rec: true },
  { id: "studio", name: "Studio", mo: 59, yr: 47, stencils: 250, per: "0,24", feat: ["250 stencils al mes", "Todo lo de Pro", "Hasta 5 artistas", "Carpetas por cliente", "Soporte prioritario"], rec: false },
];

function PriceCard({ plan, annual, onApp }: { plan: typeof PLANS[0]; annual: boolean; onApp: () => void }) {
  const price = annual ? plan.yr : plan.mo;
  return (
    <div className={plan.rec ? "lum" : "card"} style={{
      position: "relative", padding: "32px 28px 30px", borderRadius: "var(--r-lg)",
      background: plan.rec ? "linear-gradient(180deg, rgba(244,183,64,.06), var(--surface))" : "var(--surface)",
      border: plan.rec ? "1px solid var(--acc-line)" : "1px solid var(--border)",
      boxShadow: plan.rec ? "var(--glow)" : "var(--sh-1)",
      display: "flex", flexDirection: "column",
    }}>
      {plan.rec && (
        <span style={{
          position: "absolute", top: -12, left: 28,
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase",
          background: "var(--acc)", color: "var(--on-acc)", padding: "5px 12px", borderRadius: 999,
          fontWeight: 700, boxShadow: "var(--glow-sm)",
        }}>
          Recomendado
        </span>
      )}
      <h3 style={{ margin: 0, fontFamily: "var(--font-head)", fontSize: 22, fontWeight: 800 }}>{plan.name}</h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 16 }}>
        <span className="display" style={{ fontSize: 46 }}>€{price}</span>
        <span style={{ color: "var(--text-3)", fontSize: 15 }}>/mes</span>
      </div>
      <div style={{
        display: "inline-flex", alignSelf: "flex-start", marginTop: 12,
        gap: 7, alignItems: "center",
        fontFamily: "var(--font-mono)", fontSize: 12.5,
        color: "var(--acc-bright)", background: "var(--acc-soft)",
        border: "1px solid var(--acc-line)", padding: "5px 11px", borderRadius: 999,
      }}>
        ≈ €{plan.per} por stencil
      </div>
      {annual && (
        <div style={{ fontSize: 12.5, color: "var(--text-3)", marginTop: 10 }}>
          Facturado €{plan.yr * 12}/año
        </div>
      )}
      <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 26px", display: "flex", flexDirection: "column", gap: 13 }}>
        {plan.feat.map(f => (
          <li key={f} style={{ display: "flex", gap: 11, fontSize: 14.5, color: "var(--text-2)" }}>
            <Icon name="check" size={18} style={{ color: "var(--acc)", flexShrink: 0, marginTop: 1 }} />
            {f}
          </li>
        ))}
      </ul>
      <button onClick={onApp} className={`btn ${plan.rec ? "btn-primary" : "btn-subtle"}`} style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}>
        {plan.rec ? "Empezar con Pro" : `Elegir ${plan.name}`}
      </button>
    </div>
  );
}

export default function PricingSection({ onApp }: { onApp: () => void }) {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" style={{ padding: "92px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ width: "100%", maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 18px" }}>
          <span className="eyebrow">Precios honestos</span>
          <h2 className="display" style={{ fontSize: "clamp(30px,4vw,46px)", margin: 0 }}>
            Sabes lo que pagas por cada stencil
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 17, marginTop: 16 }}>
            Sin créditos fantasma ni cargos escondidos. Empieza gratis y sube de plan solo si lo necesitas.
          </p>
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", margin: "26px 0 14px" }}>
          <div className="lum" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", borderRadius: "var(--r)", background: "var(--surface)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--acc-soft)", border: "1px solid var(--acc-line)", color: "var(--acc-bright)", display: "grid", placeItems: "center", flexShrink: 0 }}>
              <Icon name="spark" size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontFamily: "var(--font-head)" }}>3 stencils gratis</div>
              <div style={{ fontSize: 13, color: "var(--text-3)" }}>Sin tarjeta. De verdad.</div>
            </div>
          </div>
          <div className="card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", borderRadius: "var(--r)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--surface-3)", color: "var(--text)", display: "grid", placeItems: "center", flexShrink: 0 }}>
              <Icon name="bolt" size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontFamily: "var(--font-head)" }}>Starter pack · €4</div>
              <div style={{ fontSize: 13, color: "var(--text-3)" }}>10 stencils, pago único, sin suscripción</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14, margin: "26px 0 38px" }}>
          <span style={{ fontSize: 14, color: annual ? "var(--text-3)" : "var(--text)", fontWeight: 600 }}>Mensual</span>
          <Toggle checked={annual} onChange={setAnnual} />
          <span style={{ fontSize: 14, color: annual ? "var(--text)" : "var(--text-3)", fontWeight: 600 }}>Anual</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--acc-bright)", background: "var(--acc-soft)", border: "1px solid var(--acc-line)", padding: "3px 9px", borderRadius: 999 }}>−20%</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, alignItems: "start" }} className="grid-3">
          {PLANS.map(pl => <PriceCard key={pl.id} plan={pl} annual={annual} onApp={onApp} />)}
        </div>

        <div className="card" style={{ marginTop: 26, padding: "20px 24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
          <Icon name="shield" size={22} style={{ color: "var(--acc)", flexShrink: 0, marginTop: 1 }} />
          <p style={{ margin: 0, fontSize: 14.5, color: "var(--text-2)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--text)" }}>Política de créditos, sin esconderla: </strong>
            en planes anuales, los stencils no usados se acumulan hasta 2 meses. En mensual, el contador se reinicia al renovar. Puedes cancelar cuando quieras y conservas lo que ya generaste. Nunca cobramos por sorpresa.
          </p>
        </div>
      </div>
    </section>
  );
}

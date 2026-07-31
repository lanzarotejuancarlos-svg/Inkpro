"use client";
import React from "react";

const schedule = [
  { day: "Lunes", hours: "06:00 – 22:00", classes: ["06:00 HYROX Prep", "09:00 Funcional", "11:00 Yoga", "17:00 Spinning", "19:30 Funcional", "21:00 Pilates"] },
  { day: "Martes", hours: "06:00 – 22:00", classes: ["06:00 Funcional", "10:00 Pilates", "11:30 Yoga", "18:00 Spinning", "19:30 HYROX Prep", "21:00 Funcional"] },
  { day: "Miércoles", hours: "06:00 – 22:00", classes: ["06:00 HYROX Prep", "09:30 Yoga", "11:00 Funcional", "17:00 Pilates", "19:30 Spinning", "21:00 HYROX"] },
  { day: "Jueves", hours: "06:00 – 22:00", classes: ["06:00 Funcional", "10:00 Spinning", "11:30 Pilates", "18:00 HYROX Prep", "19:30 Funcional", "21:00 Yoga"] },
  { day: "Viernes", hours: "06:00 – 22:00", classes: ["06:00 HYROX Prep", "09:00 Funcional", "11:00 Spinning", "17:30 Yoga", "19:30 Funcional", "21:00 HYROX"] },
  { day: "Sábado", hours: "08:00 – 20:00", classes: ["08:00 HYROX Open", "10:00 Funcional", "11:30 Yoga", "13:00 Spinning", "17:00 Pilates"] },
  { day: "Domingo", hours: "08:00 – 20:00", classes: ["09:00 Funcional", "11:00 Yoga & Pilates", "12:30 HYROX Recovery"] },
];

const classColors: Record<string, string> = {
  HYROX: "#FF4713",
  Funcional: "#FF4713",
  Spinning: "#8B5CF6",
  Yoga: "#10B981",
  Pilates: "#10B981",
};

function getColor(cls: string) {
  for (const key of Object.keys(classColors)) {
    if (cls.includes(key)) return classColors[key];
  }
  return "#FF4713";
}

export default function SirocoSchedule() {
  return (
    <section
      id="horarios"
      style={{
        background: "#0C0C0F",
        padding: "100px 24px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#FF4713",
              marginBottom: 16,
            }}
          >
            Organiza tu semana
          </span>
          <h2
            style={{
              fontFamily: "var(--font-archivo-black), sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              marginBottom: 16,
            }}
          >
            HORARIO
            <br />
            <span style={{ color: "#FF4713" }}>DE CLASES</span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", maxWidth: 480, margin: "0 auto 8px" }}>
            Abierto de lunes a viernes de 6:00 a 22:00 y fines de semana de 8:00 a 20:00.
          </p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
            * Horario orientativo — contacta para confirmar el horario actual
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {[
            { color: "#FF4713", label: "HYROX / Funcional" },
            { color: "#8B5CF6", label: "Spinning" },
            { color: "#10B981", label: "Yoga / Pilates" },
          ].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: l.color, display: "inline-block" }} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Week grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 10,
          }}
          className="siroco-week-grid"
        >
          {schedule.map((day) => (
            <div key={day.day}>
              {/* Day header */}
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-archivo-black), sans-serif",
                    fontWeight: 900,
                    fontSize: 13,
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {day.day.slice(0, 3)}
                </div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>
                  {day.day === "Sábado" || day.day === "Domingo" ? "8h-20h" : "6h-22h"}
                </div>
              </div>

              {/* Classes */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {day.classes.map((cls) => {
                  const [time, ...rest] = cls.split(" ");
                  const name = rest.join(" ");
                  const color = getColor(name);
                  return (
                    <div
                      key={cls}
                      style={{
                        background: `${color}14`,
                        border: `1px solid ${color}33`,
                        borderRadius: 8,
                        padding: "7px 8px",
                      }}
                    >
                      <div style={{ fontSize: 10, color: color, fontWeight: 700, marginBottom: 2 }}>{time}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 600, lineHeight: 1.3 }}>
                        {name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 56,
            textAlign: "center",
            background: "rgba(255,71,19,0.08)",
            border: "1px solid rgba(255,71,19,0.2)",
            borderRadius: 16,
            padding: "36px 24px",
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 8 }}>
            ¿Quieres reservar una clase de prueba gratis?
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
            Contáctanos y te orientamos en el horario que mejor se adapte a ti.
          </p>
          <a
            href="#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#FF4713",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "background .18s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ff5c2e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF4713")}
          >
            Reservar clase de prueba
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .siroco-week-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .siroco-week-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

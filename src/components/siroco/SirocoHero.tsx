"use client";
import React, { useEffect, useRef } from "react";

export default function SirocoHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.003;

      const lines = 8;
      for (let i = 0; i < lines; i++) {
        const progress = i / lines;
        const y = canvas.height * 0.55 + Math.sin(t + progress * Math.PI * 2) * 60 * (1 - progress);
        const alpha = (1 - progress) * 0.12;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x <= canvas.width; x += 4) {
          const wave =
            Math.sin(x * 0.005 + t * 2 + progress) * 30 +
            Math.sin(x * 0.012 + t * 1.3 + progress * 2) * 18;
          ctx.lineTo(x, y + wave);
        }
        ctx.strokeStyle = `rgba(255,71,19,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #08080A 0%, #12080A 50%, #08080A 100%)",
      }}
    >
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(255,71,19,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,71,19,0.12)",
            border: "1px solid rgba(255,71,19,0.3)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#FF4713",
              boxShadow: "0 0 10px #FF4713",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "#FF4713",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Primer Centro HYROX Oficial de Canarias
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-archivo-black), sans-serif",
            fontWeight: 900,
            fontSize: "clamp(52px, 10vw, 108px)",
            lineHeight: 0.92,
            color: "#fff",
            letterSpacing: "-0.03em",
            marginBottom: 28,
            textWrap: "balance",
          }}
        >
          ENTRENA.
          <br />
          <span style={{ color: "#FF4713" }}>COMPITE.</span>
          <br />
          SUPÉRATE.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 600,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          Centro de entrenamiento híbrido en Costa Teguise, Lanzarote.
          Fuerza, cardio y HYROX al más alto nivel.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contacto"
            style={{
              background: "#FF4713",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "background .18s, transform .18s, box-shadow .18s",
              boxShadow: "0 0 32px rgba(255,71,19,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff5c2e";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 48px rgba(255,71,19,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FF4713";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(255,71,19,0.4)";
            }}
          >
            Empieza hoy
          </a>
          <a
            href="#servicios"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "border-color .18s, background .18s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 48,
            justifyContent: "center",
            marginTop: 72,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "4.9★", label: "Valoración Google" },
            { value: "+11", label: "Atletas en mundiales" },
            { value: "1º", label: "HYROX Canarias" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-archivo-black), sans-serif",
                  fontSize: "clamp(28px, 4vw, 38px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 6,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, transparent, rgba(255,71,19,0.6))",
            animation: "siroco-scroll 2s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes siroco-scroll {
          0%, 100% { opacity: 0.4; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}

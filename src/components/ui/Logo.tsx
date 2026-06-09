"use client";
import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({ size = 24, showText = true }: LogoProps) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <svg width={size + 8} height={size + 8} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="8" stroke="#F4B740" strokeWidth="2"/>
        <path d="M9 23 L16 10 L23 23" stroke="#F4B740" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 17.5 L19.5 17.5" stroke="#FFCB5B" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="16" cy="10" r="2" fill="#FFCB5B"/>
      </svg>
      {showText && (
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: size + 4,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}>
          Linework
        </span>
      )}
    </div>
  );
}

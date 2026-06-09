"use client";
import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: "none", border: "none", padding: 0,
        color: "var(--text)", cursor: "pointer", fontSize: 14,
      }}
    >
      <span style={{
        width: 40, height: 23, borderRadius: 999, padding: 2,
        transition: "background .2s",
        background: checked ? "var(--acc)" : "var(--surface-3)",
        flex: "none",
        boxShadow: checked ? "var(--glow-sm)" : "inset 0 0 0 1px var(--border)",
        display: "flex", alignItems: "center",
      }}>
        <span style={{
          display: "block", width: 19, height: 19, borderRadius: 999,
          background: checked ? "var(--on-acc)" : "#cfcfd4",
          transform: checked ? "translateX(17px)" : "none",
          transition: "transform .2s cubic-bezier(.2,.8,.2,1)",
        }}/>
      </span>
      {label && <span>{label}</span>}
    </button>
  );
}

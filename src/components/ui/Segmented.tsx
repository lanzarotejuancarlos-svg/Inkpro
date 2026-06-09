"use client";
import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SegmentedProps {
  options: (string | Option)[];
  value: string;
  onChange: (v: string) => void;
  size?: "sm" | "md";
  full?: boolean;
}

export default function Segmented({ options, value, onChange, size = "md", full }: SegmentedProps) {
  return (
    <div style={{
      display: "inline-flex",
      background: "var(--bg-2)",
      border: "1px solid var(--border)",
      borderRadius: 10,
      padding: 4,
      gap: 2,
      width: full ? "100%" : undefined,
    }}>
      {options.map((opt) => {
        const v = typeof opt === "string" ? opt : opt.value;
        const label = typeof opt === "string" ? opt : opt.label;
        const active = v === value;
        return (
          <button
            key={v}
            onClick={() => onChange(v)}
            style={{
              flex: full ? 1 : undefined,
              border: "none",
              borderRadius: 7,
              cursor: "pointer",
              padding: size === "sm" ? "6px 11px" : "8px 15px",
              fontSize: size === "sm" ? 12.5 : 13.5,
              fontWeight: 600,
              fontFamily: "var(--font-head)",
              background: active ? "var(--acc)" : "transparent",
              color: active ? "var(--on-acc)" : "var(--text-2)",
              boxShadow: active ? "var(--glow-sm)" : "none",
              transition: "all .18s",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

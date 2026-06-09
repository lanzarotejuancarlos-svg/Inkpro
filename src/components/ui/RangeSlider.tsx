"use client";
import React from "react";

interface RangeSliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (v: number) => void;
  label?: string;
  suffix?: string;
}

export default function RangeSlider({ value, min = 0, max = 100, step = 1, onChange, label, suffix = "" }: RangeSliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 9, fontSize: 13 }}>
          <span style={{ color: "var(--text-2)" }}>{label}</span>
          <span className="mono" style={{ color: "var(--acc-bright)", fontSize: 12.5 }}>{value}{suffix}</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="lw-range"
        style={{
          background: `linear-gradient(90deg, var(--acc) ${pct}%, var(--surface-3) ${pct}%)`,
        }}
      />
    </div>
  );
}

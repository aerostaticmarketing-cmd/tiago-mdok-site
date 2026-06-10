'use client';

import { useState, useEffect } from 'react';

interface VUMeterProps {
  label: string;
  value?: number;
  animate?: boolean;
}

export default function VUMeter({ label, value = 50, animate = true }: VUMeterProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setDisplayValue((prev) => {
        const change = (Math.random() - 0.5) * 30;
        const newValue = Math.max(0, Math.min(100, prev + change));
        return newValue;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [animate]);

  useEffect(() => {
    if (!animate) setDisplayValue(value);
  }, [value, animate]);

  const rotation = (displayValue / 100) * 120 - 60;
  const getColor = () => {
    if (displayValue < 70) return '#8BAF7C';
    if (displayValue < 85) return '#D4C9B0';
    return '#FF6B6B';
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="120" height="100" viewBox="0 0 120 100">
        {/* Fondo */}
        <rect x="10" y="10" width="100" height="70" rx="8" fill="#1A1A16" stroke="#8BAF7C" strokeWidth="1" opacity="0.3" />

        {/* Escala de fondo */}
        {Array.from({ length: 11 }).map((_, i) => {
          const angle = -60 + (i / 10) * 120;
          const rad = (angle * Math.PI) / 180;
          const innerRadius = 45;
          const outerRadius = 50;

          const x1 = 60 + innerRadius * Math.cos(rad);
          const y1 = 60 + innerRadius * Math.sin(rad);
          const x2 = 60 + outerRadius * Math.cos(rad);
          const y2 = 60 + outerRadius * Math.sin(rad);

          const isRed = i >= 8;

          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={isRed ? '#FF6B6B' : '#8BAF7C'} strokeWidth="1" opacity="0.6" />
              <text
                x={60 + 38 * Math.cos(rad)}
                y={60 + 38 * Math.sin(rad) + 3}
                textAnchor="middle"
                fontSize="8"
                fill="#8BAF7C"
                opacity="0.5"
              >
                {i * 10}
              </text>
            </g>
          );
        })}

        {/* Aguja */}
        <g transform={`rotate(${rotation} 60 60)`}>
          <line x1="60" y1="60" x2="60" y2="20" stroke={getColor()} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        </g>

        {/* Centro */}
        <circle cx="60" cy="60" r="4" fill="#8BAF7C" opacity="0.6" />

        {/* LEDs indicadores */}
        {[0, 1, 2].map((i) => {
          const isLit = displayValue > 60 + i * 15;
          return (
            <circle
              key={i}
              cx={25 + i * 20}
              cy="30"
              r="3"
              fill={isLit ? '#FF6B6B' : '#3D3D35'}
              opacity={isLit ? 0.9 : 0.2}
            />
          );
        })}
      </svg>

      <div className="text-center">
        <p className="text-[10px] uppercase tracking-wider text-[var(--gris-suave)] font-medium">
          {label}
        </p>
        <p className="text-[12px] font-bold text-[var(--verde-oscuro)]">
          {Math.round(displayValue)} dB
        </p>
      </div>
    </div>
  );
}

'use client';

import { useState, useRef } from 'react';

interface KnobProps {
  label: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  color?: string;
}

export default function Knob({
  label,
  value = 50,
  onChange,
  min = 0,
  max = 100,
  color = '#8BAF7C'
}: KnobProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const ref = useRef<SVGSVGElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;

    let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;

    const normalized = (angle / 270) * (max - min) + min;
    const newValue = Math.min(Math.max(normalized, min), max);

    setCurrentValue(newValue);
    onChange?.(Math.round(newValue));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const rotation = (currentValue - min) / (max - min) * 270 - 135;

  return (
    <div className="flex flex-col items-center gap-3" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <svg
        ref={ref}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        onMouseDown={handleMouseDown}
        className="cursor-grab active:cursor-grabbing"
      >
        {/* Fondo circular */}
        <circle cx="50" cy="50" r="45" fill="#1A1A16" stroke={color} strokeWidth="1" opacity="0.3" />

        {/* Marcas de referencia */}
        {Array.from({ length: 13 }).map((_, i) => {
          const angle = (i / 12) * 270 - 135;
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 40 * Math.cos(rad);
          const y1 = 50 + 40 * Math.sin(rad);
          const x2 = 50 + 35 * Math.cos(rad);
          const y2 = 50 + 35 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}

        {/* Indicador circular */}
        <g transform={`rotate(${rotation} 50 50)`}>
          <line x1="50" y1="15" x2="50" y2="25" stroke={color} strokeWidth="2" />
        </g>

        {/* Centro */}
        <circle cx="50" cy="50" r="6" fill={color} opacity="0.8" />
      </svg>

      <div className="text-center">
        <p className="text-[10px] uppercase tracking-wider text-[var(--gris-suave)] font-medium">
          {label}
        </p>
        <p className="text-[14px] font-bold text-[var(--verde-oscuro)]">
          {Math.round(currentValue)}%
        </p>
      </div>
    </div>
  );
}

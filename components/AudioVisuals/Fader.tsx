'use client';

import { useState } from 'react';

interface FaderProps {
  label: string;
  value?: number;
  onChange?: (value: number) => void;
  color?: string;
}

export default function Fader({ label, value = 50, onChange, color = '#8BAF7C' }: FaderProps) {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <style>{`
        input[type="range"] {
          writing-mode: bt-lr;
          -webkit-appearance: none;
          appearance: none;
          width: 40px;
          height: 120px;
          background: transparent;
          cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 12px;
          background: ${color};
          border-radius: 2px;
          cursor: grab;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        input[type="range"]::-moz-range-thumb {
          width: 28px;
          height: 12px;
          background: ${color};
          border-radius: 2px;
          cursor: grab;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        input[type="range"]::-webkit-slider-runnable-track {
          background: rgba(139, 175, 124, 0.2);
          height: 4px;
          border-radius: 2px;
        }
        input[type="range"]::-moz-range-track {
          background: rgba(139, 175, 124, 0.2);
          height: 4px;
          border-radius: 2px;
        }
      `}</style>

      {/* Track visual */}
      <div className="relative h-[120px] w-[40px] bg-gradient-to-b from-[rgba(139,175,124,0.1)] to-[rgba(139,175,124,0.3)] rounded border border-[var(--verde-claro)] opacity-50">
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--verde-claro)] to-[var(--verde-medio)] opacity-40 transition-all"
          style={{ height: `${currentValue}%` }}
        />
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={currentValue}
        onChange={handleChange}
        className="absolute opacity-0 pointer-events-auto"
        style={{ width: '40px', height: '120px' }}
      />

      {/* Label y valor */}
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-wider text-[var(--gris-suave)] font-medium">
          {label}
        </p>
        <p className="text-[12px] font-bold text-[var(--verde-oscuro)]">
          {Math.round(currentValue)}
        </p>
      </div>
    </div>
  );
}

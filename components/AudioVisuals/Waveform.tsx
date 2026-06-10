'use client';

import { useEffect, useRef, useState } from 'react';

interface WaveformProps {
  frequency?: number;
  amplitude?: number;
  color?: string;
  height?: number;
  animate?: boolean;
}

export default function Waveform({
  frequency = 5,
  amplitude = 20,
  color = '#8BAF7C',
  height = 80,
  animate = true
}: WaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const width = canvas.width;
      const centerY = canvas.height / 2;

      // Limpiar
      ctx.fillStyle = '#1A1A1622';
      ctx.fillRect(0, 0, width, canvas.height);

      // Dibujar onda
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const normalizedX = x / width;
        const wave =
          Math.sin((normalizedX * Math.PI * frequency * 2 + phase) * Math.PI) *
          amplitude;
        const y = centerY + wave;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Grid
      ctx.strokeStyle = `${color}22`;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += width / 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Centro line
      ctx.strokeStyle = `${color}44`;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      if (animate) {
        setPhase((prev) => prev + 0.05);
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [frequency, amplitude, color, animate, phase]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        width={400}
        height={height}
        className="w-full border border-[var(--verde-claro)] rounded-lg bg-[#1A1A1633]"
      />
    </div>
  );
}

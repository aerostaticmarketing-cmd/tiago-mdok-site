'use client';

import Knob from './Knob';
import Fader from './Fader';
import VUMeter from './VUMeter';
import Waveform from './Waveform';
import { useState } from 'react';

export default function ControlRoom() {
  const [masterVolume, setMasterVolume] = useState(60);
  const [tone, setTone] = useState(50);
  const [depth, setDepth] = useState(40);
  const [mix, setMix] = useState(75);

  return (
    <section className="bg-gradient-to-b from-[#1A1A16] to-[#2A2A22] py-20 border-y-4 border-[var(--verde-claro)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[56px] font-bold text-[var(--beige)]" style={{ fontFamily: 'var(--font-display)' }}>
            Control Room
          </h2>
          <p className="text-[14px] text-[var(--gris-suave)] mt-4">
            Interfaz profesional de mezcla y masterización
          </p>
        </div>

        {/* Main Mixer */}
        <div className="bg-[#0F0F0C] border-4 border-[var(--verde-claro)] rounded-xl p-12 mb-12">
          {/* Waveform */}
          <div className="mb-8">
            <p className="text-[12px] uppercase tracking-wider text-[var(--verde-claro)] font-medium mb-4">
              Master Output
            </p>
            <Waveform frequency={5} amplitude={25} color="#8BAF7C" height={100} animate />
          </div>

          {/* Mixer Channels */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Channel 1 */}
            <div className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)] opacity-70 hover:opacity-100 transition">
              <Knob label="Tone" value={tone} onChange={setTone} color="#8BAF7C" min={0} max={100} />
            </div>

            {/* Channel 2 */}
            <div className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)] opacity-70 hover:opacity-100 transition">
              <Knob label="Depth" value={depth} onChange={setDepth} color="#B8956A" min={0} max={100} />
            </div>

            {/* VU Meter */}
            <div className="col-span-2 md:col-span-2 flex justify-center items-start pt-6">
              <VUMeter label="Level" animate={true} />
            </div>

            {/* Fader 1 */}
            <div className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)]">
              <Fader label="Volume L" value={masterVolume} onChange={setMasterVolume} color="#8BAF7C" />
            </div>

            {/* Fader 2 */}
            <div className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)]">
              <Fader label="Volume R" value={mix} onChange={setMix} color="#8BAF7C" />
            </div>
          </div>

          {/* Master Controls */}
          <div className="border-t-4 border-[var(--verde-claro)] pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-wider text-[var(--gris-suave)] font-medium mb-2">
                Output Level
              </p>
              <div className="flex justify-center items-center gap-4">
                <Fader label="L" value={masterVolume} onChange={setMasterVolume} color="#8BAF7C" />
                <div className="text-center">
                  <p className="text-[10px] text-[var(--gris-suave)]">MASTER</p>
                  <p className="text-[20px] font-bold text-[var(--verde-claro)]">{Math.round(masterVolume)}</p>
                </div>
                <Fader label="R" value={masterVolume} onChange={setMasterVolume} color="#8BAF7C" />
              </div>
            </div>

            {/* Status Indicators */}
            <div className="text-center space-y-3">
              <div className="flex justify-center gap-2">
                {['READY', 'CLIP', 'LOCK'].map((label, i) => (
                  <div key={label} className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#3D3D35] mb-1" />
                    <p className="text-[8px] uppercase text-[var(--gris-suave)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Panel */}
            <div className="text-right space-y-1">
              <p className="text-[11px] uppercase tracking-wider text-[var(--verde-claro)] font-medium">
                Studio Professional
              </p>
              <p className="text-[10px] text-[var(--gris-suave)]">
                High-Resolution Audio Interface
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Mixing Console', desc: 'Interfaz profesional de mezcla en tiempo real' },
            { title: 'Mastering Tools', desc: 'EQ, Compresión y Limitadores avanzados' },
            { title: 'Metering', desc: 'Análisis de espectro y medidores de nivel preciso' },
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-[#1A1A16] border border-[var(--verde-claro)] rounded-lg">
              <h3 className="text-[14px] font-bold text-[var(--verde-claro)] mb-2">{feature.title}</h3>
              <p className="text-[12px] text-[var(--gris-suave)]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

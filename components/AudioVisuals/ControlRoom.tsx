'use client';

import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const vuMeterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-[#1A1A16] to-[#2A2A22] py-20 border-y-4 border-[var(--verde-claro)]">
      <style>{`
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          50% {
            border-right-color: transparent;
          }
        }
        .typewriter-title {
          display: inline-block;
          overflow: hidden;
          border-right: 3px solid var(--beige);
          white-space: nowrap;
          animation: typewriter 1s steps(20, end) 0.3s forwards, blink 0.75s step-end infinite 0.3s;
          opacity: 0;
          animation: typewriter 1s steps(20, end) 0.3s forwards, blink 0.75s step-end infinite 0.3s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="typewriter-title text-[40px] md:text-[56px] font-bold text-[var(--beige)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Control Room
          </h2>
          <motion.p
            className="text-[14px] text-[var(--gris-suave)] mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Interfaz profesional de mezcla y masterización
          </motion.p>
        </motion.div>

        {/* Main Mixer */}
        <motion.div
          className="bg-[#0F0F0C] border-4 border-[var(--verde-claro)] rounded-xl p-12 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Waveform */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] uppercase tracking-wider text-[var(--verde-claro)] font-medium mb-4">
              Master Output
            </p>
            <Waveform frequency={5} amplitude={25} color="#8BAF7C" height={100} animate />
          </motion.div>

          {/* Mixer Channels */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Channel 1 - Knob */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)] opacity-70 hover:opacity-100 transition"
            >
              <Knob label="Tone" value={tone} onChange={setTone} color="#8BAF7C" min={0} max={100} />
            </motion.div>

            {/* Channel 2 - Knob */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)] opacity-70 hover:opacity-100 transition"
            >
              <Knob label="Depth" value={depth} onChange={setDepth} color="#B8956A" min={0} max={100} />
            </motion.div>

            {/* VU Meter */}
            <motion.div
              variants={vuMeterVariants}
              className="col-span-2 md:col-span-2 flex justify-center items-start pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <VUMeter label="Level" animate={true} />
            </motion.div>

            {/* Fader 1 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)]"
            >
              <Fader label="Volume L" value={masterVolume} onChange={setMasterVolume} color="#8BAF7C" />
            </motion.div>

            {/* Fader 2 */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-[#1A1A16] rounded-lg border border-[var(--verde-claro)]"
            >
              <Fader label="Volume R" value={mix} onChange={setMix} color="#8BAF7C" />
            </motion.div>
          </motion.div>

          {/* Master Controls */}
          <motion.div
            className="border-t-4 border-[var(--verde-claro)] pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
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
                  <motion.div
                    key={label}
                    className="flex flex-col items-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#3D3D35] mb-1" />
                    <p className="text-[8px] uppercase text-[var(--gris-suave)]">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Panel */}
            <motion.div
              className="text-right space-y-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-wider text-[var(--verde-claro)] font-medium">
                Studio Professional
              </p>
              <p className="text-[10px] text-[var(--gris-suave)]">
                High-Resolution Audio Interface
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: 'Mixing Console', desc: 'Interfaz profesional de mezcla en tiempo real' },
            { title: 'Mastering Tools', desc: 'EQ, Compresión y Limitadores avanzados' },
            { title: 'Metering', desc: 'Análisis de espectro y medidores de nivel preciso' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 bg-[#1A1A16] border border-[var(--verde-claro)] rounded-lg"
            >
              <h3 className="text-[14px] font-bold text-[var(--verde-claro)] mb-2">{feature.title}</h3>
              <p className="text-[12px] text-[var(--gris-suave)]">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

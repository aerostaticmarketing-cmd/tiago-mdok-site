'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[90vh] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'slide 20s linear infinite'
        }}
      />

      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 30px rgba(61, 90, 62, 0.2); }
          50% { box-shadow: 0 20px 50px rgba(61, 90, 62, 0.4); }
        }
        .fade-in { animation: fadeIn 0.8s ease-out; }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .float { animation: float 3s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      `}</style>

      {/* Left Content */}
      <div className="tex-grain flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--verde-medio)] font-medium">
            Productor Musical · Ingeniero de Sonido · Disponible Globalmente
          </p>
        </div>

        {/* Hero Title */}
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-[40px] md:text-[52px] lg:text-[56px] font-bold leading-[1.1] text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
            Sound that carries the{' '}
            <span className="italic text-[var(--verde-oscuro)]" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>soul</span> of the city.
          </h1>
        </div>

        {/* Description */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-[14px] md:text-[15px] font-light text-[var(--gris-suave)] max-w-[500px] leading-[1.7]">
            Productor, arreglista y sound engineer con más de 10 años de experiencia en música y medios. Créditos en Netflix, RCN y colaboraciones con Juanes, Carlos Vives y Gilberto Santa Rosa.
          </p>
        </div>

        {/* Genre Pills */}
        <div className="flex flex-wrap gap-3 fade-in-up" style={{ animationDelay: '0.4s' }}>
          {['Reggaeton', 'Afrobeat', 'Hip-Hop', 'Latin', 'Trap', 'Sync'].map((genre, idx) => (
            <span
              key={genre}
              className="pill cursor-pointer transition-all hover:scale-105 hover:-translate-y-1"
              style={{
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                animationDelay: `${0.5 + idx * 0.05}s`
              }}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 fade-in-up pt-4" style={{ animationDelay: '0.7s' }}>
          <Link href="#portafolio-preview" className="btn-primary inline-block transition-all hover:scale-102 hover:-translate-y-1 active:scale-98">
            ▶ Escuchar demos
          </Link>
          <Link href="/contact" className="btn-secondary inline-block transition-all hover:scale-102 hover:-translate-y-1 active:scale-98">
            Descargar EPK
          </Link>
        </div>
      </div>

      {/* Right Image Placeholder */}
      <div className="tex-leaf-dark flex items-center justify-center px-6 md:px-12 py-12 md:py-20 relative fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="w-full max-w-[300px] aspect-square bg-gradient-to-br from-[var(--verde-medio)] to-[var(--verde-oscuro)] rounded-[12px] flex items-center justify-center pulse-glow">
          <div className="text-center float">
            <p className="text-[48px] font-bold text-[var(--beige)] opacity-30" style={{ fontFamily: 'var(--font-display)' }}>
              ♪
            </p>
            <p className="text-[12px] text-[var(--beige)] opacity-40 mt-4">Foto del artista</p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const titleWords = ['Sound', 'that', 'carries', 'the', 'soul', 'of', 'the', 'city'];

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

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const containerTagsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[90vh] relative overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'slide 20s linear infinite',
        }}
      />

      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 30px rgba(61, 90, 62, 0.2); }
          50% { box-shadow: 0 20px 50px rgba(61, 90, 62, 0.4); }
        }
        .float { animation: float 3s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      `}</style>

      {/* Left Content */}
      <div className="tex-grain flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 space-y-8 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--verde-medio)] font-medium">
            Productor Musical · Ingeniero de Sonido · Disponible Globalmente
          </p>
        </motion.div>

        {/* Hero Title - Stagger each word */}
        <motion.div
          className="overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="text-[40px] md:text-[52px] lg:text-[56px] font-bold leading-[1.1] text-[var(--negro)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {titleWords.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em]">
                {word === 'soul' ? (
                  <span className="italic text-[var(--verde-oscuro)]">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
            {'.'}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-[14px] md:text-[15px] font-light text-[var(--gris-suave)] max-w-[500px] leading-[1.7]">
            Productor, arreglista y sound engineer con más de 10 años de experiencia en música y medios. Créditos en Netflix, RCN y colaboraciones con Juanes, Carlos Vives y Gilberto Santa Rosa.
          </p>
        </motion.div>

        {/* Genre Pills - Slide from left */}
        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerTagsVariants}
          initial="hidden"
          animate="visible"
        >
          {['Reggaeton', 'Afrobeat', 'Hip-Hop', 'Latin', 'Trap', 'Sync'].map((genre) => (
            <motion.span
              key={genre}
              className="pill cursor-pointer transition-all"
              variants={tagVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {genre}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs - Scale on hover with spring */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.div
            whileHover="hover"
            variants={buttonVariants}
          >
            <Link href="#portafolio-preview" className="btn-primary inline-block">
              ▶ Escuchar demos
            </Link>
          </motion.div>
          <motion.div
            whileHover="hover"
            variants={buttonVariants}
          >
            <Link href="/contact" className="btn-secondary inline-block">
              Descargar EPK
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Placeholder */}
      <motion.div
        className="tex-leaf-dark flex items-center justify-center px-6 md:px-12 py-12 md:py-20 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-full max-w-[300px] aspect-square bg-gradient-to-br from-[var(--verde-medio)] to-[var(--verde-oscuro)] rounded-[12px] flex items-center justify-center pulse-glow">
          <div className="text-center float">
            <p
              className="text-[48px] font-bold text-[var(--beige)] opacity-30"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ♪
            </p>
            <p className="text-[12px] text-[var(--beige)] opacity-40 mt-4">Foto del artista</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

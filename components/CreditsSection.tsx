'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { credits } from '@/data/tracks';

export default function CreditsSection() {
  const [activeTab, setActiveTab] = useState<'music' | 'cinema'>('music');

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const tabData = {
    music: {
      label: 'Créditos musicales',
      data: credits.music,
      borderColor: 'border-[var(--verde-medio)]',
      bgColor: 'tex-leaf-light',
      titleColor: 'text-[var(--verde-oscuro)]',
    },
    cinema: {
      label: 'Cine & TV',
      data: credits.cinema,
      borderColor: 'border-[var(--cafe-claro)]',
      bgColor: 'tex-wood',
      titleColor: 'text-[var(--cafe)]',
    },
  };

  const currentTab = tabData[activeTab];

  return (
    <section className="tex-grain py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-[32px] md:text-[40px] font-bold text-[var(--negro)] mb-12"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Créditos destacados
        </h2>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-12">
          {(['music', 'cinema'] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium text-[13px] uppercase tracking-[0.08em] transition-all border-b-2 ${
                activeTab === tab
                  ? 'text-[var(--negro)] border-[var(--verde-oscuro)]'
                  : 'text-[var(--gris-suave)] border-transparent hover:text-[var(--negro)]'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab === 'music' ? 'Créditos Musicales' : 'Cine & TV'}
            </motion.button>
          ))}
        </div>

        {/* Cards Container with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {currentTab.data.map((credit, i) => {
                const isMusicCredit = activeTab === 'music' && 'artist' in credit;
                return (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    variants={cardVariants}
                    className={`${currentTab.bgColor} border-l-4 ${currentTab.borderColor} p-4 rounded-[8px] cursor-pointer transition-all`}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <h4 className={`text-[14px] font-bold ${currentTab.titleColor}`}>
                      {isMusicCredit ? (credit as any).artist : (credit as any).title}
                    </h4>
                    <p className="text-[12px] text-[var(--gris-suave)]">
                      {isMusicCredit ? (credit as any).role : `${(credit as any).platform} · ${(credit as any).role}`}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

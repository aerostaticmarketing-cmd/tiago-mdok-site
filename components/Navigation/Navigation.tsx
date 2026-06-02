'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="tex-grain border-b border-[var(--beige-dark)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <h1 className="text-[20px] font-bold text-[var(--verde-oscuro)]" style={{ fontFamily: 'var(--font-display)' }}>
            Tiago Mdok
          </h1>
          <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--gris-suave)]">
            Music Producer · Cali, Colombia
          </p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/portfolio" className="text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)] transition">
            Portafolio
          </Link>
          <Link href="/store" className="text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)] transition">
            Tienda
          </Link>
          <Link href="/services" className="text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)] transition">
            Servicios
          </Link>
          <Link href="/contact" className="text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)] transition">
            Contacto
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/services#calculadora" className="btn-primary">
            Cotizar proyecto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--verde-oscuro)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--beige-dark)] bg-white p-6 space-y-4">
          <Link href="/portfolio" className="block text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)]">
            Portafolio
          </Link>
          <Link href="/store" className="block text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)]">
            Tienda
          </Link>
          <Link href="/services" className="block text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)]">
            Servicios
          </Link>
          <Link href="/contact" className="block text-[11px] uppercase tracking-[0.08em] text-[var(--gris-texto)] hover:text-[var(--verde-oscuro)]">
            Contacto
          </Link>
          <Link href="/services#calculadora" className="btn-primary block text-center">
            Cotizar proyecto
          </Link>
        </div>
      )}
    </nav>
  );
}

import Link from 'next/link';
import { Music, Heart, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tex-grain-mid py-12 border-t border-[var(--beige-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left - Logo */}
          <div>
            <h2 className="text-[18px] font-bold text-[var(--verde-oscuro)]" style={{ fontFamily: 'var(--font-display)' }}>
              Tiago Mdok
            </h2>
            <p className="text-[12px] text-[var(--gris-suave)] mt-1">
              Miracali Records · Cali, Colombia
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://instagram.com/tiagomdok"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--verde-oscuro)] hover:text-[var(--verde-medio)] transition"
              aria-label="Instagram"
            >
              <Heart size={20} />
            </Link>
            <Link
              href="https://spotify.com/artist/tiagomdok"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--verde-oscuro)] hover:text-[var(--verde-medio)] transition"
              aria-label="Spotify"
            >
              <Music size={20} />
            </Link>
            <Link
              href="https://soundbetter.com/tiagomdok"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--verde-oscuro)] hover:text-[var(--verde-medio)] transition"
              aria-label="SoundBetter"
            >
              <Globe size={20} />
            </Link>
            <Link
              href="mailto:booking@tiagomdok.com"
              className="p-2 text-[var(--verde-oscuro)] hover:text-[var(--verde-medio)] transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>

          {/* Right - Copyright */}
          <div className="text-right">
            <p className="text-[12px] text-[var(--gris-suave)]">
              © {currentYear} Tiago Mdok
            </p>
            <p className="text-[11px] text-[var(--gris-suave)] mt-1">
              Miracali Records™
            </p>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-[var(--beige-dark)] pt-6">
          <p className="text-center text-[10px] text-[var(--gris-suave)] uppercase tracking-[0.08em]">
            Crafted with passion in Cali, Colombia · Distributed worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}

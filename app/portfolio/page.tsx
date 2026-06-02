import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import { portfolioTracks, credits } from '@/data/tracks';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="tex-grain py-12 md:py-16 border-b border-[var(--beige-dark)]">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-[40px] md:text-[56px] font-bold text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
              El trabajo habla.
            </h1>
            <p className="text-[14px] md:text-[15px] text-[var(--gris-suave)] max-w-[600px] mt-4">
              Producciones, arreglos y colaboraciones con artistas y sellos reconocidos internacionalmente.
            </p>
          </div>
        </section>

        {/* Audio Player */}
        <section className="tex-grain py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--negro)] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Demos & Producciones
            </h2>
            <AudioPlayer tracks={portfolioTracks} compact={false} />
          </div>
        </section>

        {/* Music Credits */}
        <section className="tex-grain-mid py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--negro)] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Créditos Musicales
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {credits.music.map((credit, i) => (
                <div key={i} className="tex-leaf-light border-l-4 border-[var(--verde-medio)] p-6 rounded-[8px]">
                  <h4 className="text-[16px] font-bold text-[var(--verde-oscuro)]">{credit.artist}</h4>
                  <p className="text-[13px] text-[var(--gris-suave)] mt-2">{credit.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cinema & TV Credits */}
        <section className="tex-grain py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--negro)] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Cine & TV
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {credits.cinema.map((credit, i) => (
                <div key={i} className="tex-wood border-l-4 border-[var(--cafe-claro)] p-6 rounded-[8px]">
                  <h4 className="text-[16px] font-bold text-[var(--cafe)]">{credit.title}</h4>
                  <p className="text-[13px] text-[var(--gris-suave)] mt-2">{credit.platform}</p>
                  <p className="text-[13px] text-[var(--gris-suave)] mt-1">{credit.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

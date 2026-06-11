import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import HeroSection from '@/components/HeroSection/HeroSection';
import ControlRoom from '@/components/AudioVisuals/ControlRoom';
import CreditsSection from '@/components/CreditsSection';
import { portfolioTracks, beats } from '@/data/tracks';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* HERO SECTION */}
        <HeroSection />

        {/* CONTROL ROOM - Interfaz de mezcla */}
        <ControlRoom />

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* STATS BAR */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="tex-grain-mid py-12 md:py-16 border-t border-b border-[var(--beige-dark)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: '10+', label: 'Años de experiencia' },
                { number: 'Netflix', label: 'Crédito en pantalla' },
                { number: '15+', label: 'Artistas reconocidos' },
                { number: 'ES / EN', label: 'Bilingüe' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-[28px] md:text-[32px] font-bold text-[var(--verde-oscuro)]" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.number}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.08em] text-[var(--gris-suave)] mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* CRÉDITOS DESTACADOS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <CreditsSection />

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* PORTAFOLIO PREVIEW */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="portafolio-preview" className="tex-grain py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--negro)] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Escucha el trabajo
            </h2>

            <AudioPlayer tracks={portfolioTracks} compact={false} />

            <div className="text-center mt-8">
              <Link href="/portfolio" className="btn-primary">
                Ver portafolio completo →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* SERVICIOS PREVIEW */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="tex-grain-mid py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--negro)] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Servicios
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Producción musical completa',
                  description: 'Desde la composición hasta el mastering',
                  price: 'USD $300+',
                  color: 'tex-leaf-mid',
                },
                {
                  title: 'Mezcla y masterización',
                  description: 'Optimización del sonido para todas las plataformas',
                  price: 'USD $150+',
                  color: 'tex-grain-mid',
                },
                {
                  title: 'Sync licensing & Sound design',
                  description: 'Licencias y diseño de sonido para medios',
                  price: 'Cotización',
                  color: 'tex-wood',
                },
              ].map((service, i) => (
                <div key={i} className={`${service.color} p-8 md:p-10 rounded-[16px] flex flex-col justify-between h-full border-2 border-transparent hover:border-[var(--verde-claro)] transition hover:shadow-lg hover:-translate-y-2`}>
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--negro)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[var(--gris-suave)] mb-6 leading-[1.6]">{service.description}</p>
                  </div>
                  <div>
                    <p className="text-[18px] font-bold text-[var(--verde-oscuro)] mb-6">{service.price}</p>
                    <Link href="/services" className="btn-primary inline-block text-[12px]">
                      Cotizar proyecto
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/services" className="btn-primary">
                Ver todos los servicios →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* ABOUT SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0">
          {/* Foto */}
          <div className="tex-leaf-dark flex items-center justify-center px-6 md:px-12 py-12 md:py-20 min-h-[400px]">
            <div className="w-[240px] h-[240px] rounded-full bg-gradient-to-br from-[var(--verde-medio)] to-[var(--verde-oscuro)] flex items-center justify-center hover:shadow-2xl transition-shadow">
              <div className="text-center">
                <p className="text-[72px] font-bold text-[var(--beige)] opacity-30" style={{ fontFamily: 'var(--font-display)' }}>
                  ♪
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="tex-grain flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
              Experiencia profesional con créditos internacionales.
            </h2>
            <p className="text-[13px] md:text-[14px] font-light text-[var(--gris-suave)] leading-[1.8]">
              Productor musical y sound engineer con más de una década de experiencia trabajando con artistas reconocidos de la industria latinoamericana. Ha dejado su marca en producciones cinematográficas de nivel internacional. Especializado en producción, mezcla, arreglos y diseño de sonido para múltiples géneros y medios.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Productor Musical', 'Netflix · RCN · Film', 'Sound Engineer', 'Bilingüe ES/EN'].map((tag, i) => (
                <span key={i} className="pill text-[9px]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4">
              <button className="btn-primary text-[12px]">
                Descargar EPK
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* CONTACTO SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section id="contacto" className="tex-leaf-dark py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-12">
              {/* Left */}
              <div className="text-[var(--beige)]">
                <h2 className="text-[32px] md:text-[40px] font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Hablemos de tu próximo proyecto.
                </h2>
                <p className="text-[13px] md:text-[14px] font-light leading-[1.8] mb-8 opacity-90">
                  Estoy disponible para proyectos de producción, mezcla, arreglos y sound design. Trabajamos con artistas, sellos discográficos, productoras audiovisuales y marcas en todo el mundo.
                </p>

                <div className="space-y-4 text-[13px]">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></span>
                    <p>info@ejemplo.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></span>
                    <p>@nombreartista en todas las plataformas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></span>
                    <p>Disponible globalmente para proyectos</p>
                  </div>
                </div>
              </div>

              {/* Right - Formulario placeholder */}
              <div className="bg-[var(--beige)] rounded-[16px] p-10 border-4 border-[var(--verde-claro)]">
                <form className="space-y-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--verde-oscuro)] mb-2">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      className="w-full px-5 py-4 rounded-[10px] border-2 border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--verde-oscuro)] mb-2">
                      Tu email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-5 py-4 rounded-[10px] border-2 border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px] font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--verde-oscuro)] mb-2">
                      Tipo de consulta
                    </label>
                    <select className="w-full px-5 py-4 rounded-[10px] border-2 border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px] font-medium">
                      <option>Selecciona un tipo</option>
                      <option>Producción musical</option>
                      <option>Mezcla y masterización</option>
                      <option>Sync licensing</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-bold text-[var(--verde-oscuro)] mb-2">
                      Cuéntame sobre tu proyecto
                    </label>
                    <textarea
                      placeholder="Describe tu idea, proyecto o consulta..."
                      rows={4}
                      className="w-full px-5 py-4 rounded-[10px] border-2 border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px] font-medium resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full text-[12px] mt-6">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

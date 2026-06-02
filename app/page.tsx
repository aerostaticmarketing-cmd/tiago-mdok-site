import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import AudioPlayer from '@/components/AudioPlayer/AudioPlayer';
import { portfolioTracks, credits, beats } from '@/data/tracks';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HERO SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[90vh]">
          {/* Left Content */}
          <div className="tex-grain flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 space-y-8">
            {/* Eyebrow */}
            <div className="animate-fade-in">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--verde-medio)] font-medium">
                Cali · Colombia · Director Musical, Miracali Records
              </p>
            </div>

            {/* Hero Title */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-[40px] md:text-[52px] lg:text-[56px] font-bold leading-[1.1] text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
                Sound that carries the{' '}
                <span className="italic text-[var(--verde-oscuro)]">soul</span> of the city.
              </h1>
            </div>

            {/* Description */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-[14px] md:text-[15px] font-light text-[var(--gris-suave)] max-w-[500px] leading-[1.7]">
                Productor, arreglista y sound engineer con más de 10 años de experiencia en música y medios. Créditos en Netflix, RCN y colaboraciones con Juanes, Carlos Vives y Gilberto Santa Rosa.
              </p>
            </div>

            {/* Genre Pills */}
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {['Reggaeton', 'Afrobeat', 'Hip-Hop', 'Latin', 'Trap', 'Sync'].map((genre) => (
                <span key={genre} className="pill">
                  {genre}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link href="#portafolio-preview" className="btn-primary">
                Escuchar demos
              </Link>
              <Link href="/contact" className="btn-ghost">
                Ver EPK →
              </Link>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="tex-leaf-dark flex items-center justify-center px-6 md:px-12 py-12 md:py-20 relative">
            <div className="w-full max-w-[300px] aspect-square bg-gradient-to-br from-[var(--verde-medio)] to-[var(--verde-oscuro)] rounded-[12px] flex items-center justify-center animate-scale-in">
              <div className="text-center">
                <p className="text-[48px] font-bold text-[var(--beige)] opacity-30" style={{ fontFamily: 'var(--font-display)' }}>
                  TM
                </p>
                <p className="text-[12px] text-[var(--beige)] opacity-40 mt-4">Foto artista Tiago Mdok</p>
              </div>
            </div>
          </div>
        </section>

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
        <section className="tex-grain py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--negro)] mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              Créditos destacados
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Music Credits */}
              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.08em] text-[var(--gris-suave)] font-medium mb-6">Créditos musicales</p>
                {credits.music.map((credit, i) => (
                  <div key={i} className="tex-leaf-light border-l-4 border-[var(--verde-medio)] p-4 rounded-[8px]">
                    <h4 className="text-[14px] font-bold text-[var(--verde-oscuro)]">{credit.artist}</h4>
                    <p className="text-[12px] text-[var(--gris-suave)]">{credit.role}</p>
                  </div>
                ))}
              </div>

              {/* Cinema Credits */}
              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.08em] text-[var(--gris-suave)] font-medium mb-6">Cine & TV</p>
                {credits.cinema.map((credit, i) => (
                  <div key={i} className="tex-wood border-l-4 border-[var(--cafe-claro)] p-4 rounded-[8px]">
                    <h4 className="text-[14px] font-bold text-[var(--cafe)]">{credit.title}</h4>
                    <p className="text-[12px] text-[var(--gris-suave)]">{credit.platform} · {credit.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                  color: 'tex-grain',
                },
                {
                  title: 'Sync licensing & Sound design',
                  description: 'Licencias y diseño de sonido para medios',
                  price: 'Cotización',
                  color: 'tex-wood',
                },
              ].map((service, i) => (
                <div key={i} className={`${service.color} p-6 md:p-8 rounded-[12px] flex flex-col justify-between h-full`}>
                  <div>
                    <h3 className="text-[16px] md:text-[18px] font-bold text-[var(--negro)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-[var(--gris-suave)] mb-4">{service.description}</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[var(--negro)] mb-4">{service.price}</p>
                    <Link href="/services" className="btn-ghost text-[12px]">
                      Cotizar →
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
            <div className="w-[240px] h-[240px] rounded-full bg-gradient-to-br from-[var(--verde-medio)] to-[var(--verde-oscuro)] flex items-center justify-center">
              <div className="text-center">
                <p className="text-[72px] font-bold text-[var(--beige)] opacity-30" style={{ fontFamily: 'var(--font-display)' }}>
                  TM
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="tex-grain flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 space-y-6">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
              Un productor con raíces en Cali y créditos en el mundo.
            </h2>
            <p className="text-[13px] md:text-[14px] font-light text-[var(--gris-suave)] leading-[1.8]">
              Daniel Santiago Montesdeoca Calderón, más conocido como Tiago Mdok, es un productor musical, sound engineer y director musical radicado en Cali, Colombia. Con más de una década de experiencia, ha trabajado con algunos de los nombres más reconocidos de la industria musical latinoamericana y ha dejado su marca en producciones cinematográficas de nivel internacional.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Cali, Colombia', 'Miracali Records', 'Netflix · RCN · Film', 'Bilingüe ES/EN'].map((tag, i) => (
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
                    <p>booking@tiagomdok.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></span>
                    <p>@tiagomdok en todas las plataformas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></span>
                    <p>Cali, Colombia · Disponible internacionalmente</p>
                  </div>
                </div>
              </div>

              {/* Right - Formulario placeholder */}
              <div className="bg-[var(--beige)] rounded-[12px] p-8">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px]"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px]">
                      <option>Tipo de consulta</option>
                      <option>Producción</option>
                      <option>Mezcla</option>
                      <option>Sync</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px] resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full text-[12px]">
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

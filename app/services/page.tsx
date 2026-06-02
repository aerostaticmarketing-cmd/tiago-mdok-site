import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: 'Producción musical completa',
      description: 'Desde la composición hasta el mastering. Desarrollo de concepto, arreglación e instrumentación profesional.',
      price: 'USD $300+',
    },
    {
      title: 'Mezcla y masterización',
      description: 'Optimización del sonido para todas las plataformas. Equilibrio, compresión, EQ y tratamiento profesional.',
      price: 'USD $150+',
    },
    {
      title: 'Arreglos musicales',
      description: 'Orquestación, arreglos de cuerdas, vientos y secciones. Adaptación de estilos y géneros.',
      price: 'USD $200+',
    },
    {
      title: 'Sound design para medios',
      description: 'Diseño de sonido para cine, TV, publicidad. Efectos, música incidental y diseño sonoro creativo.',
      price: 'Cotización',
    },
    {
      title: 'Coaching vocal & instrumental',
      description: '3 sesiones de coaching para mejorar técnica vocal o instrumental. Feedback profesional y personalizado.',
      price: 'USD $90',
    },
    {
      title: 'Asesoría de carrera musical',
      description: 'Dirección artística, estrategia musical y consultoría para artistas y productores independientes.',
      price: 'USD $150+',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="tex-grain py-12 md:py-16 border-b border-[var(--beige-dark)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--verde-medio)] font-medium mb-4">
              Desde la idea hasta el sonido final
            </p>
            <h1 className="text-[40px] md:text-[56px] font-bold text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
              Servicios Profesionales
            </h1>
            <p className="text-[14px] md:text-[15px] text-[var(--gris-suave)] max-w-[600px] mt-4">
              Soluciones de audio personalizadas para artistas, productores y empresas en todo el mundo.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="tex-grain py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`p-10 rounded-[16px] flex flex-col justify-between h-full border-4 border-transparent hover:border-[var(--verde-claro)] transition ${
                    i % 3 === 0 ? 'tex-leaf-mid' : i % 3 === 1 ? 'tex-grain-mid' : 'tex-wood'
                  }`}
                >
                  <div>
                    <h3 className="text-[20px] font-bold text-[var(--negro)] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[var(--gris-suave)] leading-[1.7]">{service.description}</p>
                  </div>
                  <div className="mt-8">
                    <p className="text-[12px] uppercase tracking-[0.08em] font-bold text-[var(--gris-suave)] mb-2">Desde</p>
                    <p className="text-[24px] font-bold text-[var(--verde-oscuro)] mb-6">{service.price}</p>
                    <button className="btn-primary text-[11px] w-full">
                      Solicitar cotización
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="tex-leaf-dark py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-[32px] md:text-[44px] font-bold text-[var(--beige)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-[14px] md:text-[15px] text-[rgba(245,240,232,0.85)] max-w-[600px] mx-auto mb-8">
              Contacta conmigo para discutir tus necesidades y obtener una cotización personalizada.
            </p>
            <button className="btn-primary bg-[var(--beige)] text-[var(--verde-oscuro)] hover:bg-[var(--beige-mid)]">
              Enviar consulta
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

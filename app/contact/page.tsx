import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="tex-grain py-12 md:py-16 border-b border-[var(--beige-dark)]">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-[40px] md:text-[56px] font-bold text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
              Hablemos
            </h1>
            <p className="text-[14px] md:text-[15px] text-[var(--gris-suave)] max-w-[600px] mt-4">
              Contáctame para nuevos proyectos, consultas o simplemente para decir hola.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="tex-grain py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_1fr] gap-12">
              {/* Left - Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-[28px] font-bold text-[var(--negro)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                    Información de contacto
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[14px] font-bold text-[var(--negro)]">Email</p>
                        <p className="text-[13px] text-[var(--gris-suave)]">booking@tiagomdok.com</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[14px] font-bold text-[var(--negro)]">Redes Sociales</p>
                        <p className="text-[13px] text-[var(--gris-suave)]">@tiagomdok en todas las plataformas</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[var(--verde-claro)] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[14px] font-bold text-[var(--negro)]">Ubicación</p>
                        <p className="text-[13px] text-[var(--gris-suave)]">Cali, Colombia</p>
                        <p className="text-[13px] text-[var(--gris-suave)]">Disponible internacionalmente</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="btn-primary">
                  Descargar EPK
                </button>
              </div>

              {/* Right - Form */}
              <div className="bg-[var(--beige)] rounded-[16px] p-8 space-y-5">
                <form className="space-y-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[var(--gris-suave)] uppercase tracking-[0.08em] mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[var(--gris-suave)] uppercase tracking-[0.08em] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[var(--gris-suave)] uppercase tracking-[0.08em] mb-2">
                      Tipo de consulta
                    </label>
                    <select className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px]">
                      <option>Selecciona un tipo</option>
                      <option>Producción musical</option>
                      <option>Mezcla y masterización</option>
                      <option>Sync licensing</option>
                      <option>Asesoría</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[var(--gris-suave)] uppercase tracking-[0.08em] mb-2">
                      Cuéntame sobre tu proyecto
                    </label>
                    <textarea
                      placeholder="Describe tu proyecto, idea o consulta..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-[8px] border border-[var(--beige-dark)] focus:outline-none focus:border-[var(--verde-oscuro)] text-[13px] resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-[12px]">
                    Enviar mensaje
                  </button>
                </form>

                <p className="text-[11px] text-[var(--gris-suave)] text-center">
                  Responderé dentro de 48 horas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

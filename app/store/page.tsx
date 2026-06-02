import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import { beats, samplePacks } from '@/data/tracks';
import Link from 'next/link';

export default function StorePage() {
  const allProducts = [...beats, ...samplePacks];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="tex-grain py-12 md:py-16 border-b border-[var(--beige-dark)]">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-[40px] md:text-[56px] font-bold text-[var(--negro)]" style={{ fontFamily: 'var(--font-display)' }}>
              Tienda de Beats
            </h1>
            <p className="text-[14px] md:text-[15px] text-[var(--gris-suave)] max-w-[600px] mt-4">
              Instrumentales listos para usar. Elige tu licencia y descarga al instante.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="tex-grain py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {['Todos', 'Beats', 'Packs', 'Urbano', 'Afrobeat', 'Latin'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-[20px] text-[12px] uppercase tracking-[0.08em] font-medium border border-[var(--verde-suave)] text-[var(--verde-oscuro)] hover:bg-[var(--verde-polvo)] transition"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="tex-grain py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <div key={product.id} className="tex-leaf-light p-8 rounded-[16px] border-l-4 border-[var(--verde-medio)] hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col">
                  {/* Artwork */}
                  <div className="w-full aspect-square bg-gradient-to-br from-[var(--verde-medio)] to-[var(--verde-oscuro)] rounded-[12px] mb-6 flex items-center justify-center">
                    <p className="text-[14px] text-[var(--beige)] opacity-40 font-medium">Artwork</p>
                  </div>

                  {/* Badge */}
                  <div className="flex gap-3 mb-4">
                    <span className="pill text-[10px] font-bold">{product.type === 'beat' ? '🎵 BEAT' : '📦 PACK'}</span>
                    {product.featured && (
                      <span className="pill text-[10px] bg-[var(--cafe-suave)] text-[var(--cafe)] font-bold">⭐ DESTACADO</span>
                    )}
                  </div>

                  {/* Info */}
                  <h3 className="text-[18px] font-bold text-[var(--verde-oscuro)] mb-3">{product.name}</h3>
                  <p className="text-[13px] text-[var(--gris-suave)] mb-5 line-clamp-2">{product.description}</p>

                  {/* Meta */}
                  {product.bpm && (
                    <p className="text-[12px] text-[var(--gris-suave)] mb-6 font-medium">
                      {product.genre} · {product.bpm} BPM {product.key && `· ${product.key}`}
                    </p>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-end justify-between gap-4 mt-auto">
                    <div>
                      <p className="text-[12px] text-[var(--gris-suave)] uppercase tracking-[0.08em] font-bold">Desde</p>
                      <p className="text-[22px] font-bold text-[var(--verde-oscuro)]">
                        ${product.price}
                      </p>
                    </div>
                    <button className="btn-primary text-[11px]">
                      {product.type === 'beat' ? 'Licenciar' : 'Comprar'}
                    </button>
                  </div>
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

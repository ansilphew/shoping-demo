import { products } from "../../data/products";

export default function FeaturedStrip({ setPage }) {
  const featured = products.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest">Featured pieces</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl">
            Designed like a drop, not a catalog
          </h2>
        </div>
        <button
          className="hidden text-sm font-semibold tracking-[0.18em] uppercase text-forest transition hover:text-ink sm:inline-flex"
          onClick={() => setPage("shop")}
        >
          View all
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/75 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div
              className="relative flex h-72 items-center justify-center overflow-hidden"
              style={{ background: product.color }}
            >
              <img
                className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-[1.04]"
                src={product.image}
                alt={product.name}
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
                {product.category}
              </span>
            </div>
            <div className="space-y-2 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
                  <p className="text-sm text-ink/55">{product.description}</p>
                </div>
                <p className="whitespace-nowrap text-base font-semibold text-forest">₹{product.price.toLocaleString()}</p>
              </div>
              <button
                className="text-xs font-semibold uppercase tracking-[0.24em] text-forest transition hover:text-ink"
                onClick={() => setPage("shop")}
              >
                Explore this drop
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 text-center sm:hidden">
        <button
          className="text-xs font-semibold uppercase tracking-[0.24em] text-forest transition hover:text-ink"
          onClick={() => setPage("shop")}
        >
          View all
        </button>
      </div>
    </section>
  );
}

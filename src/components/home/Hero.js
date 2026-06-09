import { useState, useEffect } from "react";
import { products } from "../../data/products";

export default function Hero({ setPage }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const featured = products.slice(0, 5);

  function goTo(index) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }

  function next() {
    goTo((current + 1) % featured.length);
  }

  function prev() {
    goTo((current - 1 + featured.length) % featured.length);
  }

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [current]);

  const product = featured[current];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

        {/* ── Left: Brand Copy ──────────────────────────────────────── */}
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full border border-forest/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-forest shadow-sm">
            New season arrival
          </span>
          <h1 className="font-display text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">
            Rooted in Kerala.
            <br />
            <span className="text-forest">Built to wear</span>
            <br />
            everywhere.
          </h1>
          <p className="mt-6 max-w-md text-base leading-8 text-ink/65 sm:text-lg">
            Small-batch streetwear with earthy palettes and graphics that feel hand-built — not mass-produced.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-ink"
              onClick={() => setPage("shop")}
            >
              Shop the collection
            </button>
            <button
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold tracking-[0.18em] text-ink transition hover:-translate-y-0.5 hover:border-forest/40 hover:text-forest"
              onClick={() => setPage("contact")}
            >
              Ask a question
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex gap-6">
            {[["9+", "Drops"], ["100%", "Cotton"], ["24h", "Support"]].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold text-forest">{v}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Carousel ───────────────────────────────────────── */}
        <div className="relative flex flex-col">
          {/* Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-soft border border-black/8">

            {/* Top label bar */}
            <div className="flex items-center justify-between bg-sand/60 px-6 py-3 border-b border-black/6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-forest animate-pulse" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-forest">Live Drop</p>
              </div>
              <p className="text-xs text-ink/40 font-medium">
                {current + 1} / {featured.length}
              </p>
            </div>

            {/* Image area */}
            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gradient-to-b from-sand/30 to-white/90 px-8 py-6">
              <img
                key={current}
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain drop-shadow-xl transition-all duration-300"
                style={{ opacity: animating ? 0 : 1, transform: animating ? "scale(0.95)" : "scale(1)" }}
              />

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/8 text-ink shadow-sm backdrop-blur transition hover:bg-white hover:shadow-panel"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/8 text-ink shadow-sm backdrop-blur transition hover:bg-white hover:shadow-panel"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Product info */}
            <div className="border-t border-black/6 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-forest">
                    {product.category}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-bold text-ink">{product.name}</h2>
                  <p className="mt-1 text-sm text-ink/50 line-clamp-1">{product.description}</p>
                </div>
                <p className="whitespace-nowrap font-display text-2xl font-bold text-ink">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  className="flex-1 rounded-full bg-ink py-2.5 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-forest"
                  onClick={() => setPage("shop")}
                >
                  Add to cart
                </button>
                <button
                  className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-semibold text-ink/60 transition hover:border-forest/30 hover:text-forest"
                  onClick={() => setPage("shop")}
                >
                  View all
                </button>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-forest"
                    : "w-2 h-2 bg-black/15 hover:bg-black/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="mt-4 flex gap-2 justify-center">
            {featured.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                className={`h-14 w-14 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                  i === current
                    ? "border-forest scale-110 shadow-md"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

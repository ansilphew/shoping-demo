import { useState } from "react";

export default function ProductCard({ product, onAdd }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  function handleAdd() {
    if (!selectedSize) {
      setError("Pick a size before adding.");
      window.setTimeout(() => setError(""), 1800);
      return;
    }

    onAdd({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/80 shadow-panel transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative overflow-hidden bg-white">
        <img
          className="block h-auto w-full transition duration-300 group-hover:scale-[1.01]"
          src={product.image}
          alt={product.name}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
          <p className="text-sm leading-6 text-ink/60">{product.description}</p>
          <p className="font-display text-xl font-bold text-forest">₹{product.price.toLocaleString()}</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">Sizes</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`min-w-10 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                  selectedSize === size
                    ? "border-forest bg-forest text-white"
                    : "border-black/10 bg-white text-ink/65 hover:border-forest/40 hover:text-forest"
                }`}
                onClick={() => {
                  setSelectedSize(size);
                  setError("");
                }}
              >
                {size}
              </button>
            ))}
          </div>
          {error ? <p className="mt-2 text-xs font-medium text-rose-600">{error}</p> : null}
        </div>

        <button
          className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold tracking-[0.18em] text-white transition ${
            added ? "bg-moss" : "bg-ink hover:bg-forest"
          }`}
          onClick={handleAdd}
        >
          {added ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

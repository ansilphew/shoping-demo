export default function FilterBar({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "border-forest bg-forest text-white shadow-sm"
              : "border-black/10 bg-white/70 text-ink/65 hover:border-forest/40 hover:text-forest"
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

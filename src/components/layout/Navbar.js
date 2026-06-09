import { useState } from "react";

export default function Navbar({ page, setPage, cartCount, setCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(targetPage) {
    setPage(targetPage);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          className="font-display text-xl font-bold tracking-[0.32em] text-forest transition hover:text-ink"
          onClick={() => goTo("home")}
        >
          KUPPAYAM
        </button>

        <div
          className={`absolute left-0 right-0 top-full z-40 border-b border-black/10 bg-paper px-4 py-4 shadow-soft transition-all duration-200 md:static md:block md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-8">
            {[
              ["home", "Home"],
              ["shop", "Shop"],
              ["returns", "Returns"],
              ["contact", "Contact"],
            ].map(([target, label]) => (
              <button
                key={target}
                onClick={() => goTo(target)}
                className={`text-left text-sm font-medium tracking-[0.16em] uppercase transition md:text-center ${
                  page === target ? "text-forest" : "text-ink/65 hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-forest/40 hover:text-forest"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-forest px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink shadow-sm transition hover:border-forest/40 hover:text-forest md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

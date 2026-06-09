import { assetReferences } from "../../data/assetReferences";

export default function Footer({ setPage }) {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <p className="font-display text-2xl font-bold tracking-[0.3em] text-sand">KUPPAYAM</p>
          <p className="max-w-md text-sm leading-7 text-white/70">
            Slow fashion rooted in Kerala, designed to feel modern, wearable, and built for repeated wear.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/35">
            Visuals are custom SVGs informed by public stock references.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">Navigate</p>
          <div className="flex flex-col gap-3 text-sm text-white/75">
            <button onClick={() => setPage("shop")} className="text-left transition hover:text-sand">
              Shop
            </button>
            <button onClick={() => setPage("returns")} className="text-left transition hover:text-sand">
              Returns &amp; Refunds
            </button>
            <button onClick={() => setPage("contact")} className="text-left transition hover:text-sand">
              Contact
            </button>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">Asset credits</p>
          <div className="space-y-2 text-sm text-white/70">
            {assetReferences.slice(0, 3).map((asset) => (
              <a
                key={asset.label}
                href={asset.url}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-sand"
              >
                {asset.label}
                <span className="ml-2 text-white/35">{asset.source}</span>
              </a>
            ))}
            <p className="pt-2 text-xs text-white/35">Full reference list lives in `src/data/assetReferences.js`.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/35 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Kuppayam. All rights reserved.</p>
          <p>@kuppayam · hello@kuppayam.in</p>
        </div>
      </div>
    </footer>
  );
}

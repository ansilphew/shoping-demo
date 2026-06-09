export default function AboutBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-soft backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest">About Kuppayam</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl">
            Garments with a sense of place
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/72">
            Kuppayam means garment in Malayalam. The collection is built around that idea: every piece should feel
            grounded, useful, and memorable without being precious.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["Small runs", "Each drop stays intentionally limited."],
            ["Earth palette", "Warm neutrals and forest tones do the heavy lifting."],
            ["Public refs", "We document the inspiration sources for every asset."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] border border-black/8 bg-paper/80 p-4">
              <p className="text-sm font-semibold text-ink">{title}</p>
              <p className="mt-2 text-sm leading-6 text-ink/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

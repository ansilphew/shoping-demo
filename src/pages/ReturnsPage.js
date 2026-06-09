export default function ReturnsPage() {
  const blocks = [
    [
      "Our policy",
      "We want you to love what you receive. If something is off, we'll make it right.",
    ],
    [
      "Eligibility",
      "Items can be returned within 7 days of delivery. Products must be unworn, unwashed, and in original condition.",
    ],
    [
      "How to return",
      "Message us through the Contact page with your order number and reason for return. We'll help with the next step.",
    ],
    [
      "Refunds",
      "Approved refunds are processed within 5-7 business days back to your original payment method. Shipping charges are non-refundable.",
    ],
    [
      "Exchanges",
      "Need a different size? We offer size exchanges subject to stock availability inside the same 7-day window.",
    ],
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-soft backdrop-blur sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest">Returns</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">
          Returns &amp; refunds, kept simple.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-ink/65">
          We keep the process straightforward so you can shop with confidence and ask questions early if something
          doesn't feel right.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {blocks.map(([title, body]) => (
          <div key={title} className="rounded-[1.6rem] border border-black/10 bg-white/80 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-ink/65">{body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[1.6rem] border border-forest/20 bg-forest/10 p-5 text-sm leading-7 text-ink/70">
        Sale items and limited drops are final sale and cannot be returned.
      </div>
    </section>
  );
}

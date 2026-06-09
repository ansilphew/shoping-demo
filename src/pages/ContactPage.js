import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-soft backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">
            Let's talk about fit, fabric, or a custom question.
          </h1>
          <p className="mt-4 text-base leading-8 text-ink/65">
            We read every message and reply within 24 to 48 hours.
          </p>

          <div className="mt-8 space-y-4">
            {[
              ["Instagram", "@kuppayam"],
              ["Email", "hello@kuppayam.in"],
              ["Response time", "Within 24-48 hours"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.4rem] border border-black/8 bg-paper/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">{label}</p>
                <p className="mt-2 text-sm font-medium text-ink">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-soft backdrop-blur sm:p-8">
          {sent ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-3xl text-forest">
                ✓
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold text-ink">Message sent</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-ink/65">
                We’ll get back to you within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                ["name", "Name", "Your name"],
                ["email", "Email", "you@email.com"],
              ].map(([field, label, placeholder]) => (
                <label key={field} className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">
                    {label}
                  </span>
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={placeholder}
                    value={form[field]}
                    onChange={(event) => setForm({ ...form, [field]: event.target.value })}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/30 focus:border-forest"
                    required
                  />
                </label>
              ))}

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">Message</span>
                <textarea
                  placeholder="Tell us what you need..."
                  rows="6"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/30 focus:border-forest"
                  required
                />
              </label>

              <button className="inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-ink">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function CartDrawer({ cart, setCart, open, setOpen }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  function updateQty(index, delta) {
    setCart((currentCart) => {
      const nextCart = [...currentCart];
      const nextQty = nextCart[index].qty + delta;

      if (nextQty <= 0) {
        nextCart.splice(index, 1);
        return nextCart;
      }

      nextCart[index] = { ...nextCart[index], qty: nextQty };
      return nextCart;
    });
  }

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-ink/35 backdrop-blur-[1px]" onClick={() => setOpen(false)} />}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(92vw,26rem)] flex-col border-l border-black/10 bg-paper shadow-soft transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-forest">Cart</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink">
              Your picks
              {itemCount > 0 ? <span className="ml-2 text-sm font-semibold text-forest">({itemCount})</span> : null}
            </h2>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-ink transition hover:border-forest/40 hover:text-forest"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-ink/55">
            <p className="font-display text-2xl font-bold text-ink">Cart is empty</p>
            <p className="mt-3 text-sm leading-7">
              Add a hoodie, tee, or anything else from the shop and it will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 rounded-[1.4rem] border border-black/8 bg-white/80 p-3">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white">
                    <img className="h-full w-full object-contain" src={item.image} alt={item.name} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-forest">Size {item.selectedSize}</p>
                      </div>
                      <p className="whitespace-nowrap text-sm font-semibold text-forest">₹{item.price.toLocaleString()}</p>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-ink transition hover:border-forest/40 hover:text-forest"
                        onClick={() => updateQty(index, -1)}
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center text-sm font-semibold">{item.qty}</span>
                      <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-ink transition hover:border-forest/40 hover:text-forest"
                        onClick={() => updateQty(index, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-black/10 px-5 py-4">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-ink/70">Estimated total</span>
                <span className="text-ink">₹{total.toLocaleString()}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-ink/45">Taxes and shipping are calculated at checkout.</p>
              <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-ink">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ReturnsPage from "./pages/ReturnsPage";
import ContactPage from "./pages/ContactPage";
import CartDrawer from "./components/cart/CartDrawer";

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingIndex = currentCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (existingIndex >= 0) {
        const nextCart = [...currentCart];
        nextCart[existingIndex] = { ...nextCart[existingIndex], qty: nextCart[existingIndex].qty + 1 };
        return nextCart;
      }

      return [...currentCart, { ...product, qty: 1 }];
    });
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(106,143,108,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(199,155,125,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/35 to-transparent" />
      <Navbar page={page} setPage={setPage} cartCount={cartCount} setCartOpen={setCartOpen} />
      <main className="relative z-10">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "shop" && <ShopPage onAdd={addToCart} />}
        {page === "returns" && <ReturnsPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer setPage={setPage} />
      <CartDrawer cart={cart} setCart={setCart} open={cartOpen} setOpen={setCartOpen} />
    </div>
  );
}

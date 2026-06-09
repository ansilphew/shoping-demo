import { useMemo, useState } from "react";
import { categories, products } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import FilterBar from "../components/products/FilterBar";

export default function ShopPage({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      <FilterBar categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

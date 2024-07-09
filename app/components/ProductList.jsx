"use client";
import ProductCard from "./ProductCard";

export default function ProductList({ products, viewType }) {
  return (
    <div
      className={`relative grid ${
        viewType !== "list"
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          : "grid-cols-1 w-1/5"
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// {viewType === "grid" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" : "flex flex-col"}

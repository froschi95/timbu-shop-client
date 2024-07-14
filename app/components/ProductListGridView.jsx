import Image from "next/image";
import ProductCard from "./ProductCard";
import Group from "/public/Group.svg";
import Zara from "/public/Group 294.svg";

export default function ProductListGridView({ products }) {
  return (
    <section className="py-16 sm:py-24 mx-auto min-h-screen">
      <div className="relative h-full w-full grid grid-cols-2 gap-y-8 gap-x-[1.1875rem] sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-9 md:gap-x-11">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

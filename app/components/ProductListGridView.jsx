import ProductCard from "./ProductCard";

export default function ProductListGridView({ products }) {
  return (
    <div className="relative grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[19px] lg:gap-11 -z-10">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col my-4 gap-4">
          <ProductCard product={product} />
          <div className="">
            <h2 className="text-xs font-semibold">{product.name}</h2>
            <p className="text-xs text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

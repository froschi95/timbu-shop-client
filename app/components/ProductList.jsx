import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

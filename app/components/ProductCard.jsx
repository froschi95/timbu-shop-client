export default function ProductCard({ product }) {
  return (
    <div className="border p-4 m-2 w-full md:w-1/2 lg:w-1/3">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl mt-2">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
    </div>
  );
}

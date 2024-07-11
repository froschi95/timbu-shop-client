import Image from "next/image";
import ProductCard from "./ProductCard";
import Group from "/public/Group.svg";
import Zara from "/public/Group 294.svg";

export default function ProductListGridView({ products }) {
  return (
    <div className="relative grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[19px] lg:gap-11 -z-10 text-[#A17E6D]">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col my-4 gap-4">
          <ProductCard product={product} />
          <div className="">
            <h2 className="text-xs font-semibold">{product.name}</h2>
            <p className="text-xs flex items-center">
              <span>
                <Image src={Zara} alt="" />
              </span>
              <span>zara offical</span>
              <span>
                <Image src={Group} alt="" />
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

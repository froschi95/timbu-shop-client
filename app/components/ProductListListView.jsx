import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Star from "/public/Star 1.svg";

const ProductListListView = ({ products }) => {
  return (
    <div className="relative flex flex-col w-full md:w-2/3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="relative flex gap-3">
          <div className="w-full">
            <ProductCard product={product} />
          </div>
          <div className="w-full">
            <div className="flex flex-col">
              <div className="text-sm">
                <h1 className="font-bold">ZARA OFFICIAL</h1>
                <h3 className="font-medium">{product.name}</h3>
                {/* <p className="text-gray-600">{product.description}</p> */}
              </div>
              <div className="flex">
                <Image src={Star} alt="star" />
                <p>4.8</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListListView;

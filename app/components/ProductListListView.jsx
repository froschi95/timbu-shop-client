import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Star from "/public/Star 1.svg";
import Heart from "/public/Heart.svg";
import Compare from "/public/compare.svg";

const ProductListListView = ({ products }) => {
  return (
    <div className="relative flex flex-col w-full md:w-2/3 gap-3 -z-10">
      {products.map((product) => (
        <div key={product.id} className="relative flex gap-3">
          <div className="w-full">
            <ProductCard product={product} />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-[11px]">
              <div className="text-sm">
                <h1 className="font-bold">ZARA OFFICIAL</h1>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600 hidden md:block">
                  {product.description}
                </p>
              </div>
              <div className="flex">
                <Image src={Star} alt="star" />
                <p>4.8</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[6px] text-center text-xs">
                  <p>Size</p>
                  <div className="border-2 border-[#C4C4C4] w-6 h-6 rounded-full text-center text-xs">
                    <p>S</p>
                  </div>
                  <div className="border-2 border-[#C4C4C4] w-6 h-6 rounded-full text-center text-xs">
                    <p>M</p>
                  </div>
                  <div className="border-2 border-[#C4C4C4] w-6 h-6 rounded-full text-center text-xs">
                    <p>L</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Image src={Compare} alt="compare" />
                  <Image src={Heart} alt="heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListListView;

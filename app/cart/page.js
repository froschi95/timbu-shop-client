import React from "react";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import Star from "/public/Star 1.svg";
import products from "../data/products.json";

const CartPage = () => {
  return (
    <div className="mx-auto px-6">
      <div className="relative flex flex-col w-full md:w-2/3 gap-3 -z-10">
        {products.slice(1, 4).map((product) => (
          <>
            <div key={product.id} className="relative flex gap-3">
              <div className="w-full">
                <ProductCard product={product} />
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-[11px]">
                  <div className="text-sm">
                    <h1 className="font-bold">ZARA OFFICIAL</h1>
                    <h3 className="font-medium">{product.name}</h3>
                    {/* <p className="text-gray-600">{product.description}</p> */}
                  </div>
                  <div className="flex">
                    <Image src={Star} alt="star" />
                    <p>4.8</p>
                  </div>

                  <div className="flex gap-[6px] text-center text-xs">
                    <p>Size</p>
                    <div className="border-2 border-[#C4C4C4] bg-[#c4c4c441] w-6 h-6 rounded-full text-center text-xs">
                      <p>S</p>
                    </div>
                    <div className="border-2 border-[#C4C4C4] w-6 h-6 rounded-full text-center text-xs">
                      <p>M</p>
                    </div>
                    <div className="border-2 border-[#C4C4C4] w-6 h-6 rounded-full text-center text-xs">
                      <p>L</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-sm text-center">
                    <div className="rounded-full w-6 h-6 border-2 border-[#C4C4C4]">
                      <h2>-</h2>
                    </div>
                    <div className="rounded-full w-6 h-6 border-2 border-[#C4C4C4]">
                      <h2>1</h2>
                    </div>
                    <div className="rounded-full w-6 h-6 border-2 border-[#C4C4C4]">
                      <h2>+</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divide-y divide-[#C4C4C4]" />
          </>
        ))}
        <div className="mt-20 h-11">
          <hr className="divide-y divide-[#858585]" />

          <div className="flex py-4 justify-between items-center">
            <h1 className="text-sm font-bold">SUB TOTAL</h1>
            <p className="text-sm font-bold text-[#A17E6D]">$299</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

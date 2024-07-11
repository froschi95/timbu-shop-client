"use client";
import { useState } from "react";
import Image from "next/image";
import Heart from "/public/Frame 1389.svg";
import BagSolid from "/public/BagSolid.svg";
import BagOutline from "/public/BagOutline.svg";

export default function ProductCard({ product }) {
  const [addToCart, setAddToCart] = useState(false);
  return (
    <div className="relative rounded-xl shadow-md h-[164px] max-w-[250px] sm:h-48 xl:h-[260px] hover:scale-105 transition-all duration-200">
      {/*  h-[164px] w-[154px] */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="100vw" //(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw
        className="rounded-xl object-cover "
      />
      <Image src={Heart} alt="heart" className="absolute top-2 right-2" />
      <div
        className="cursor-pointer z-30 absolute top-9 right-2"
        onClick={() => setAddToCart(!addToCart)}
      >
        {addToCart ? (
          <Image
            src={BagSolid}
            alt="Added to Cart"
            className="hover:scale-110 transition-all duration-150"
          />
        ) : (
          <Image
            src={BagOutline}
            alt="Not added to Cart"
            className="hover:scale-110 transition-all duration-150"
          />
        )}
      </div>
      <div className="absolute bottom-3 left-3 bg-white hover:bg-blue-600 text-[#A17E6D] px-2 w-14 h-8 rounded-xl text-center overflow-hidden">
        <h2 className="pb-2 pt-1 font-bold">${product.price}</h2>
      </div>
    </div>
  );
}

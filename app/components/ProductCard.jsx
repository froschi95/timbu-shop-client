"use client";
import Image from "next/image";
import Heart from "/public/Heart.svg";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col my-4 gap-4">
      <div className="relative h-[164px] rounded-xl shadow-md">
        <Image
          src={product.image}
          alt={product.name}
          // width={250}
          // height={260}
          fill
          className="rounded-xl object-cover"
        />
        <Image src={Heart} alt="heart" className="absolute top-4 right-4" />
        <div className="absolute bottom-3 left-3 bg-white hover:bg-blue-600 text-[#A17E6D] py-2 px-2 w-14 h-8 rounded-xl text-center overflow-hidden">
          <h2>${product.price}</h2>
        </div>
      </div>
      <div className="">
        <h2 className="text-xs font-semibold">{product.name}</h2>
        <p className="text-xs text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}

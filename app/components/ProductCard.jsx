"use client";
import Image from "next/image";
import Heart from "/public/Heart.svg";

export default function ProductCard({ product }) {
  return (
    <div className="relative h-[164px] w-[154px] rounded-xl shadow-md xl:w-[250px] xl:h-[260px]">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="100vw" //(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw
        className="rounded-xl object-cover "
      />
      <Image src={Heart} alt="heart" className="absolute top-4 right-4" />
      <div className="absolute bottom-3 left-3 bg-white hover:bg-blue-600 text-[#A17E6D] px-2 w-14 h-8 rounded-xl text-center overflow-hidden">
        <h2 className="pb-2 pt-1 font-bold">${product.price}</h2>
      </div>
    </div>
  );
}

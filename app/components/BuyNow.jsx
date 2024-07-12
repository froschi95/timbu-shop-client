import React from "react";
import Image from "next/image";
import Bag from "/public/bag.svg";
import Link from "next/link";

const BuyNow = ({ text, hRef }) => {
  return (
    <Link
      href={hRef}
      className="cursor-pointer h-14 bg-black flex gap-6 justify-center items-center hover:scale-105 hover:transition-all"
    >
      <Image src={Bag} alt="cart" />
      <p className="text-sm font-bold text-white uppercase">{text}</p>
    </Link>
  );
};

export default BuyNow;

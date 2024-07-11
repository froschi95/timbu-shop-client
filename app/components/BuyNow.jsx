import React from "react";
import Image from "next/image";
import Bag from "/public/bag.svg";

const BuyNow = ({ text }) => {
  return (
    <footer className="mb-0 -bottom-4 h-14 bg-black flex gap-6 justify-center items-center">
      <Image src={Bag} alt="cart" />
      <p className="text-sm font-bold text-white uppercase">{text}</p>
    </footer>
  );
};

export default BuyNow;

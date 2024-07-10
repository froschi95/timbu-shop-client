import React from "react";
import Image from "next/image";
import Bag from "/public/bag.svg";

const BuyNow = () => {
  return (
    <div className=" bottom-0 h-14 bg-black flex gap-6 justify-center items-center">
      <Image src={Bag} alt="cart" />
      <p className="text-sm font-bold text-white">BUY NOW</p>
    </div>
  );
};

export default BuyNow;

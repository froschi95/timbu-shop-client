"use client";
import React from "react";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import Star from "/public/Star 1.svg";
import { useCart } from "../context/CartContext";
import ImageCard from "../components/ImageCard";
import PriceBtn from "../components/PriceBtn";

const CartPage = () => {
  const {
    cart,
    updateQuantity,
    totalCostOfAllItems,
    removeFromCart,
    clearCart,
  } = useCart();
  const handleIncrease = (productId) => {
    updateQuantity(productId, 1);
  };

  const handleDecrease = (productId) => {
    updateQuantity(productId, -1);
  };

  return (
    <div className="mx-auto px-6 md:py-6 min-h-screen md:flex md:justify-center">
      <ul className="relative flex flex-col w-full md:w-1/2 gap-3 -z-10">
        {cart.map((item) => (
          <li key={item.id}>
            <div className="relative flex gap-3">
              <div className="relative w-full">
                <ImageCard product={item}>
                  <PriceBtn price={item.price * item.quantity} />
                </ImageCard>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-[11px]">
                  <div className="text-sm">
                    <h1 className="font-bold">ZARA OFFICIAL</h1>
                    <h3 className="font-medium">{item.name}</h3>
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
                    <button
                      className="rounded-full w-6 h-6 border-2 border-[#C4C4C4]"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                    <div className="rounded-full w-6 h-6 border-2 border-[#C4C4C4]">
                      <h2>{item.quantity}</h2>
                    </div>
                    <button
                      className="rounded-full w-6 h-6 border-2 border-[#C4C4C4]"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divide-y divide-[#C4C4C4]" />
          </li>
        ))}
        <div className="mt-20 h-11">
          <hr className="divide-y divide-[#858585]" />

          <div className="flex py-4 justify-between items-center">
            <h1 className="text-sm font-bold">SUB TOTAL</h1>
            <p className="text-sm font-bold text-[#A17E6D]">
              ${totalCostOfAllItems}
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default CartPage;

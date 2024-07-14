"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ImageCard from "./ImageCard";
import Image from "next/image";
import BagSolid from "/public/BagSolid.svg";
import BagOutline from "/public/BagOutline.svg";
import Heart from "/public/Frame 1389.svg";
import HeartSolid from "/public/HeartSolid.svg";
import Zara from "/public/Group 294.svg";
import Group from "/public/Group.svg";
import PriceBtn from "./PriceBtn";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [insideCart, setInsideCart] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    setSaved(savedItems.includes(product.id));
  }, [product.id]);

  const handleSaveClick = () => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    if (saved) {
      const newSavedItems = savedItems.filter((id) => id !== product.id);
      localStorage.setItem("savedItems", JSON.stringify(newSavedItems));
      setSaved(false);
    } else {
      savedItems.push(product.id);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      setSaved(true);
    }
  };

  const isProductInCart = cart.some((item) => item.id === product.id);

  const handleCartClick = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="grid gap-3 md:gap-5 text-[#A17E6D]">
      <ImageCard id={product.id} product={product}>
        <div
          onClick={handleSaveClick}
          className="absolute top-[0.935rem] right-[0.935rem] h-6 w-6 bg-slate-200/40 rounded-full transition-transform duration-150 hover:scale-105 hover:bg-amber-300/60"
        >
          {saved ? (
            <Image src={HeartSolid} alt="Heart solid" />
          ) : (
            <Image src={Heart} alt="Heart" />
          )}
        </div>
        <div onClick={handleCartClick}>
          {isProductInCart ? (
            <div className="absolute top-[2.935rem] right-[0.935rem] h-6 w-6 bg-slate-200/60 rounded-full transition-transform duration-150 hover:scale-105 hover:bg-amber-300/60">
              <Image src={BagSolid} alt="" />
            </div>
          ) : (
            <div className="absolute top-[2.935rem] right-[0.935rem] h-6 w-6 bg-slate-200/60 rounded-full transition-transform duration-150 hover:bg-amber-300/60">
              <Image src={BagOutline} alt="" />
            </div>
          )}
        </div>

        <PriceBtn price={product.price} />
      </ImageCard>

      <div className="grid content-center gap-[0.375rem]">
        <h2 className="text-xs lg:text-[1.25rem] font-medium">
          21WN reversible angora
        </h2>
        <p className="flex items-center">
          <span>
            <Image src={Zara} alt="zara" />
          </span>
          <span className="text-[0.5rem] lg:text-[0.75rem]">Zara Official</span>
          <span>
            <Image src={Group} alt="green check" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

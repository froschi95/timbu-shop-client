"use client";
import React, { useState } from "react";
import Link from "next/link";
import AddressCard from "../components/AddressCard";
import Image from "next/image";
import Line from "/public/Line 29.svg";
import Bag from "/public/bag.svg";
import DeliveryDateCard from "../components/DeliveryDateCard";
import BuyNow from "../components/BuyNow.jsx";
import PaymentOptCard from "../components/PaymentOptCard";
import SavedOptionsCard from "../components/SavedOptionsCard";
import { useCart } from "../context/CartContext";
import Success from "/public/Success.svg";
import Modal from "../components/Modal";

const CheckoutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, totalCostOfAllItems } = useCart();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="mx-auto px-6 lg:px-28 xl:px-40 max-w-[66.5rem]">
      <div className="p-4 w-full min-h-screen flex flex-col items-center">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h1>CHECKOUT</h1>
          <Image src={Line} alt="line" />
        </div>
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
          <AddressCard />
          <DeliveryDateCard />
          <PaymentOptCard />
          <SavedOptionsCard />
        </div>
        <div className="flex mt-20 p-4 justify-between items-center border rounded-2xl text-base font-bold w-full max-w-xl">
          <h1 className="">TOTAL</h1>
          <p className="text-[#A17E6D]">${totalCostOfAllItems}</p>
        </div>
        <div
          onClick={handleOpenModal}
          className="cursor-pointer mt-10 h-14 bg-black flex gap-6 justify-center items-center hover:scale-105 transition-all w-full max-w-xl"
        >
          <Image src={Bag} alt="cart" />
          <p className="text-sm font-bold text-white uppercase">
            confirm payment
          </p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="mx-auto py-4">
          <div className="flex flex-col items-center gap-5 text-lg">
            <h1 className="text-xl font-bold text-center uppercase">
              Payment Successful
            </h1>
            <Image src={Success} alt="success" />
            <h3>Your payment was successful</h3>
            <p className="text-sm">Payment ID 15263541</p>
            <Image src={Line} alt="line" />
            <h2 className="cursor-pointer text-[#FF5E00]">Download Receipt</h2>
            <Link className="border px-4 py-3" href={"/"}>
              BACK TO HOME
            </Link>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default CheckoutPage;

import React from "react";
import AddressCard from "../components/AddressCard";
import Image from "next/image";
import Line from "/public/Line 29.svg";
import DeliveryDateCard from "../components/DeliveryDateCard";

const CheckoutPage = () => {
  return (
    <div className="p-6">
      <div className="mx-auto flex flex-col items-center justify-center text-center mb-10">
        <h1>CHECKOUT</h1>
        <Image src={Line} alt="line" />
      </div>
      <AddressCard />
      <DeliveryDateCard />
    </div>
  );
};

export default CheckoutPage;

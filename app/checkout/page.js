import React from "react";
import AddressCard from "../components/AddressCard";
import Image from "next/image";
import Line from "/public/Line 29.svg";
import DeliveryDateCard from "../components/DeliveryDateCard";
import BuyNow from "../components/BuyNow.jsx";
import PaymentOptCard from "../components/PaymentOptCard";
import SavedOptionsCard from "../components/SavedOptionsCard";

const CheckoutPage = () => {
  return (
    <section className="mx-auto px-6 lg:px-28 xl:px-40 max-w-[66.5rem]">
      <div className="p-4 w-full min-h-screen ">
        <div className="mx-auto flex flex-col items-center justify-center text-center mb-10">
          <h1>CHECKOUT</h1>
          <Image src={Line} alt="line" />
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <AddressCard />
          <DeliveryDateCard />
          <PaymentOptCard />
          <SavedOptionsCard />
        </div>
        <div className="flex mt-20 p-4 justify-between items-center border rounded-2xl text-base font-bold">
          <h1 className="">TOTAL</h1>
          <p className=" text-[#A17E6D]">$400</p>
        </div>
      </div>
      <BuyNow text={"place order"} hRef={"/paymentopts"} />
    </section>
  );
};

export default CheckoutPage;

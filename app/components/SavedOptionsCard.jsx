import React from "react";
import Image from "next/image";
import Visa from "/public/Visa.svg";
import Mastercard from "/public/Mastercard.svg";

const SavedOptionsCard = () => {
  return (
    <div className="mx-auto w-[348px] max-w-[472px] grid grid-cols-1 gap-4 md:rounded-xl md:border md:p-4">
      <h2 className="hidden md:block text-[#1D1D1D] text-base font-semibold">
        Payment Options
      </h2>
      <div className="grid grid-cols-1 gap-3">
        <p className="text-[#404040]">Saved Cards</p>
        <div className="flex items-center justify-between px-3 py-4 rounded-xl border active:bg-[#F7F7F7]">
          <div className="flex items-center gap-2">
            <input type="radio" className="w-[1.125rem] h-[1.125rem]" />
            <div>
              <h3 className="text-[#1D1D1D] text-base font-semibold">
                **** **** 8937
              </h3>
              <p className="text-[#666666] text-sm">Samuel Stephenson</p>
            </div>
          </div>
          <Image alt="edit" src={Mastercard} />
        </div>
        <div className="flex items-center justify-between px-3 py-4 rounded-xl border active:bg-[#F7F7F7]">
          <div className="flex items-center gap-2">
            <input type="radio" className="w-[1.125rem] h-[1.125rem]" />
            <div>
              <h3 className="text-[#1D1D1D] text-base font-semibold">
                **** **** 5637
              </h3>
              <p className="text-[#666666] text-sm">Favor Emeka</p>
            </div>
          </div>
          <Image alt="edit" src={Visa} />
        </div>
      </div>
      <div className="mx-auto flex gap-2 justify-center items-center text-center border h-11 w-full rounded-xl py-3 text-[#262626]">
        <p className="font-bold">+</p>
        <p>Add New</p>
      </div>
    </div>
  );
};

export default SavedOptionsCard;

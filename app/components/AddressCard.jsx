import Image from "next/image";
import React from "react";
import PencilIcon from "/public/Frame.svg";

const AddressCard = () => {
  const addresses = [
    {
      id: 1,
      name: " Sam Steve Jr",
      address1: "Lagos, Nigeria",
      address2: "123 Main Street, Apt 4B",
    },
    {
      id: 2,
      name: " Abraham Joseph Jr",
      address1: "Lagos, Nigeria",
      address2: "123 Main Street, Apt 5B",
    },
  ];

  return (
    <div className="mx-auto w-[348px] max-w-[472px] grid grid-cols-1 gap-4 ">
      <p className="text-[#404040]">Select from saved or add new.</p>
      <div className="grid grid-cols-1 gap-3">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-center justify-between px-3 py-4 rounded-xl border active:bg-[#F7F7F7]"
          >
            <div className="flex items-center gap-2">
              <input type="radio" className="w-[18px] h-[18px]" />
              <div>
                <h3 className="text-[#1D1D1D] font-semibold">{address.name}</h3>
                <p className="text-[#666666] text-[15px]">{address.address1}</p>
                <p className="text-[#666666] text-[15px]">{address.address2}</p>
              </div>
            </div>
            <Image alt="edit" src={PencilIcon} />
          </div>
        ))}
      </div>
      <div className="mx-auto flex gap-2 justify-center items-center text-center border w-full rounded-xl py-3 text-[#262626]">
        <p className="font-bold">+</p>
        <p>Add New</p>
      </div>
    </div>
  );
};

export default AddressCard;

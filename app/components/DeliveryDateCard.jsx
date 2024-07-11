import React from "react";

const DeliveryDateCard = () => {
  return (
    <div className="mx-auto w-[348px] max-w-[472px] grid grid-cols-1 gap-4 mt-4">
      <div className="flex gap-4">
        <p>Schedule Options</p>
        <div className="bg-black rounded-[11.13px] w-[36.19px] h-[22px] flex items-center">
          <div className="rounded-full bg-white h-[19.16px] w-[19.16px] place-self-end self-end"></div>
        </div>
      </div>
      <p className="text-[#404040]">Schedule a convenient delivery date</p>
      <form action="" className="w-full flex flex-col gap-6">
        <label htmlFor="Date" className="flex flex-col gap-2 text-[#666666]">
          Date
          <input
            type="date"
            className="border-2 px-5 py-4 text-[#262626] rounded-lg"
          />
        </label>
        <label htmlFor="Note" className="flex flex-col gap-2 text-[#666666]">
          Note
          <input
            type="text"
            name=""
            id=""
            className="border-2 px-5 py-4 text-[#262626] rounded-lg"
          />
        </label>
      </form>
    </div>
  );
};

export default DeliveryDateCard;

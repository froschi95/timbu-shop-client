import React from "react";

const DeliveryDateCard = () => {
  return (
    <div className="mx-auto w-[348px] max-w-[472px] grid grid-cols-1 gap-4 mt-4">
      <div className="flex gap-4">
        <p>Schedule Options</p>
        <input type="radio" value="" />
      </div>
      <p className="text-[#404040]">Select from saved or add new.</p>
    </div>
  );
};

export default DeliveryDateCard;

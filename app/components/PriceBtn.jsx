import React from "react";

const PriceBtn = ({ price }) => {
  return (
    <div className="absolute bottom-2 left-2 shadow-sm bg-white grid content-center text-center rounded-[0.9375rem] w-14 h-8 md:w-[4.375rem] md:h-10">
      <h2 className="text-sm font-semibold">${price}</h2>
    </div>
  );
};

export default PriceBtn;

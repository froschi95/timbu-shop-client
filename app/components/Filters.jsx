import React, { useState } from "react";
import Image from "next/image";
import ToggleView from "./ToggleView";
import Down from "/public/Down.svg";
import CatFilterIcon from "/public/CatFilter.svg";
import Close from "/public/Close.svg";

const Filters = ({ viewType, toggleViewType }) => {
  return (
    <div className="flex flex-col gap-[19px]">
      <div className="flex justify-between items-center mb-2 md:hidden">
        <h1>APPAREL</h1>
        <div className="flex gap-2">
          <div className="bg-[#c4c4c456] flex items-center px-4 rounded-[33px] text-sm">
            <p>New</p>

            <Image src={Down} alt="dropdown" />
          </div>
          <Image src={CatFilterIcon} alt="categoryFilter" />
          <ToggleView viewType={viewType} toggleViewType={toggleViewType} />
        </div>
      </div>
      <div className="flex gap-[6px] md:hidden">
        <div className="border-2 border-[#c4c4c456] flex items-center px-2 rounded-[30px] text-sm">
          <p>Women</p>
          <Image src={Close} alt="clear" />
        </div>
        <div className="border-2 border-[#c4c4c456] flex items-center px-2 rounded-[30px] text-sm">
          <p>All Apparel</p>
          <Image src={Close} alt="clear" />
        </div>
        <div className="border-2 border-[#c4c4c456] flex items-center px-2 rounded-[30px] text-sm">
          <p>Blouse</p>
          <Image src={Close} alt="clear" />
        </div>
      </div>
    </div>
  );
};

export default Filters;

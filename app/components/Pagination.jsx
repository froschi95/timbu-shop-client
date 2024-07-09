import React from "react";
import Image from "next/image";
import Left from "/public/mingcute_left-line.svg";
import Right from "/public/mingcute_right-line.svg";

const Pagination = () => {
  return (
    <div className="mt-[60px] mb-20 flex gap-1 h-[29px] items-center justify-center text-[#A17E6D] md:hidden">
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center">
        <Image src={Left} alt="backward" />
      </div>
      <div className="border-2 border-[#C4C4C4] bg-[#A17E6D] w-[33px] text-center">
        <p className="text-white">2</p>
      </div>
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center">
        <p>3</p>
      </div>
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center">
        <p>4</p>
      </div>
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center"> ...</div>
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center">
        <p>7</p>
      </div>
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center">
        <p>8</p>
      </div>
      <div className="border-2 border-[#C4C4C4] w-[33px] text-center">
        <Image src={Right} alt="forward" />
      </div>
    </div>
  );
};

export default Pagination;

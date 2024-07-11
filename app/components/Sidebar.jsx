import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const links = [
    {
      id: 1,
      link: "New",
    },
    {
      id: 2,
      link: "Apparel",
    },
    {
      id: 3,
      link: "Bags",
    },
    {
      id: 4,
      link: "Shoes",
    },
    {
      id: 5,
      link: "Beauty",
    },
    {
      id: 6,
      link: "Dress",
    },
    {
      id: 7,
      link: "Blouse",
    },
    {
      id: 8,
      link: "Outer",
    },
  ];
  return (
    <div className="hidden md:flex md:flex-col md:py-3">
      <h1 className="text-3xl leading-[46px]">Category</h1>
      <ul className="flex flex-col">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-[#948775] font-semibold text-xl leading-[46px] hover:underline transition-all duration-200"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

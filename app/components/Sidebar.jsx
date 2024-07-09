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
  ];
  return (
    <div className="hidden md:flex md:flex-col py-3">
      <h1 className="text-lg mb-3">Category</h1>
      <ul className="flex flex-col gap-3">
        {links.map(({ id, link }) => {
          <li key={id} className="text-[#948775] font-semibold text-md">
            <Link href={link}>{link}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

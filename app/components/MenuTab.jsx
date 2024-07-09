import React from "react";
import Image from "next/image";
import Link from "next/link";
import Forward from "../../public/Forward.svg";

const MenuTab = () => {
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
    <ul className="hidden md:flex md:gap-10 md:h-[49px] md:items-center  md:justify-center">
      {links.map(({ id, link }) => (
        <li
          key={id}
          className="cursor-pointer text-lg hover:scale-105 duration-200"
        >
          <Link
            className="w-full flex gap-3 items-center"
            onClick={() => setNavOpen(!navOpen)}
            href={link}
          >
            <p>{link}</p>
            <Image alt="dropdown" src={Forward} unoptimized />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuTab;

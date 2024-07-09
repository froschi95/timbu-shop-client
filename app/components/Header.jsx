"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuIcon from "../../public/menu_icon.svg";
import Logo from "../../public/vogue_logo.png";
import Bag from "../../public/bag.svg";
import SearchIcon from "../../public/search.svg";
import CloseIcon from "../../public/Close.svg";
import Forward from "../../public/Forward.svg";
import Call from "../../public/Call.svg";
import Location from "../../public/Location.svg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

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
    <header>
      <nav className="flex justify-between items-center w-full h-[104px] px-6 pt-[14px] pb-[34px] text-white bg-white sm:bg-[#948775]">
        {/* fixed navOpen*/}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {navOpen ? (
            <Image src={CloseIcon} alt="close" />
          ) : (
            <Image src={MenuIcon} alt="menu" />
          )}
        </div>

        {/* <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul> */}

        <div className="cursor-pointer hover:transition ease-in-out delay-150">
          <Image alt="logo" src={Logo} />
        </div>
        <div className="flex gap-3">
          <Image src={SearchIcon} alt="search" />
          <Image alt="bag" src={Bag} />
        </div>

        {navOpen && (
          <div className="flex flex-col px-4 absolute top-0 pt-[113px] left-0 w-full h-screen bg-white text-black">
            <ul className="flex flex-col gap-6 ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="cursor-pointer py-5 text-lg hover:scale-105 duration-200"
                >
                  <Link
                    className="w-full flex justify-between items-center"
                    onClick={() => setNavOpen(!navOpen)}
                    href={link}
                  >
                    <p>{link}</p>
                    <Image alt="dropdown" src={Forward} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col w-[186px]">
              <div className="flex justify-between call">
                <Image alt="call" src={Call} />
                <p>(903) 951-8033</p>
              </div>
              <div className="flex justify-between store">
                <Image alt="Location" src={Location} />
                <p>Our store near you</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

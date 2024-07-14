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
import HeartWhite from "/public/Heart(1).svg";
import { useCart } from "../context/CartContext";
import Cartmd from "./Cartmd";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { totalUniqueItems } = useCart();
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

  const linksMd = [
    {
      id: 1,
      link: "Women",
    },
    {
      id: 2,
      link: "Men",
    },
    {
      id: 3,
      link: "Kids",
    },
  ];

  return (
    <nav className="mx-auto px-6 py-4 bg-white md:bg-[#948775]">
      <div className="flex justify-between items-center">
        {/* Mobile menu Button */}
        <div className="md:hidden z-50">
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <Image
                src={CloseIcon}
                alt="close"
                unoptimized
                className="hover:scale-105 hover:transition-all duration-200"
              />
            ) : (
              <Image
                src={MenuIcon}
                alt="menu"
                unoptimized
                className="hover:scale-110 hover:transition-all duration-200"
              />
            )}
          </button>
        </div>

        {/* nav menu for md and above */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8 text-white">
            {linksMd.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer font-medium link-underline"
              >
                <Link
                  href={"/"}
                  className=" active:text-black hover:scale-105 hover:text-slate-200 hover:border-b hover:border-slate-100 hover:rounded-md transition duration-300 uppercase"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="cursor-pointer hover:scale-105 hover:transition ease-in-out delay-150">
          <Link href={"/"}>
            <Image alt="logo" src={Logo} />
          </Link>
        </div>

        {/* Cart & Search Mobile*/}
        <div className="flex md:hidden gap-3">
          <Image
            src={SearchIcon}
            alt="search"
            className="hover:scale-110 transition-all duration-200"
          />
          <Link href={"/cart"} className="relative">
            <Image
              alt="bag"
              src={Bag}
              className="text-white hover:scale-110 transition-all"
            />
            {totalUniqueItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 grid content-center text-center rounded-full bg-green-700 text-white text-xs font-semibold">
                {totalUniqueItems}
              </span>
            )}
          </Link>
        </div>

        {/* Cart, Seart, SavedItems md and above */}
        <div className="hidden md:flex gap-3">
          <Link href={"/search"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-110 transition-all duration-300"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href={"/"}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-110 transition-all duration-300"
            >
              <path
                d="M3.50653 3.77216C1.14366 6.13503 1.14366 9.96602 3.50653 12.3289L12.6714 21.4937L12.7344 21.4307L12.7974 21.4938L21.9623 12.329C24.3252 9.96609 24.3252 6.13511 21.9623 3.77223C19.5994 1.40936 15.7684 1.40936 13.4055 3.77224L13.2648 3.91301C12.9719 4.2059 12.497 4.2059 12.2041 3.91301L12.0633 3.77216C9.70039 1.40928 5.86941 1.40928 3.50653 3.77216Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </Link>

          <Link href={"/cart"} className="relative">
            <Cartmd />
            {totalUniqueItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 grid content-center text-center rounded-full bg-green-700 text-white text-xs font-semibold">
                {totalUniqueItems}
              </span>
            )}
          </Link>
        </div>

        {navOpen && (
          <div className="grid z-40 fixed pt-10 px-7 top-0 left-0 w-full h-screen md:hidden bg-white text-[#A17E6D] font-semibold">
            <ul className="mt-5 space-y-4">
              {links.map(({ id, link }) => (
                // <li key={id}>
                <li
                  key={id}
                  className="cursor-pointer py-5 text-lg hover:scale-105 duration-200"
                >
                  <Link
                    className="w-full flex justify-between items-center"
                    href={link}
                  >
                    <p>{link}</p>
                    <Image alt="dropdown" src={Forward} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="grid gap-2 content-center">
              <div className="flex gap-20 items-center call">
                <Image alt="call" src={Call} />
                <p>(903) 951-8033</p>
              </div>
              <div className="flex gap-20 items-center store">
                <Image alt="Location" src={Location} />
                <p>Our store near you</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

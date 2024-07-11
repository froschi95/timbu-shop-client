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
      <nav className="flex justify-between items-center w-full h-[104px] px-6 text-white bg-white md:bg-[#948775] sticky">
        {/* fixed navOpen*/}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="cursor-pointer pr-4 z-50 text-white md:hidden"
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
        </div>

        <ul className="hidden md:flex text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer font-medium link-underline"
            >
              <Link
                href={link}
                className="hover:scale-105 hover:text-slate-200 hover:border-b hover:border-slate-100 hover:rounded-md transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="cursor-pointer hover:scale-105 hover:transition ease-in-out delay-150">
          <Link href={"/"}>
            <Image alt="logo" src={Logo} />
          </Link>
        </div>

        <div className="flex md:hidden gap-3">
          <Image
            src={SearchIcon}
            alt="search"
            className="hover:scale-110 transition-all duration-200"
          />
          <Link href={"/cart"}>
            <Image
              alt="bag"
              src={Bag}
              className="text-white hover:scale-110 transition-all"
            />
          </Link>
        </div>
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

          <Link href={"/cart"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-110 transition-all duration-300"
            >
              <path
                d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        {navOpen && (
          <div className="flex flex-col px-4 fixed top-0 pt-[113px] left-0 w-full h-screen bg-white z-40 text-black bg-opacity-100">
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

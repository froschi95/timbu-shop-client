import Image from "next/image";
import Link from "next/link";
import FB from "/public/FB.svg";
import IG from "/public/IG.svg";
import Pinterest from "/public/P.svg";
import TIK from "/public/tk.svg";
import X from "/public/X.svg";
import IOSStore from "/public/streamline_app-store-solid.svg";
import PlayStore from "/public/bxl_play-store.svg";

export default function Footer() {
  const links = ["support", "dealers", "company", "products", "blog"];
  return (
    <footer className="mt-60 bg-white flex flex-col gap-[27px] items-center text-[#A17E6D] p-4 text-center">
      <ul className="grid grid-cols-1 w-[206px]">
        {links.map((link) => (
          <li
            key={links.indexOf(link)}
            className="h-11 py-[10px] border-b border-[#A17E6D] text-base"
          >
            <Link href={link} className="uppercase">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        <Image src={IG} alt="" />
        <Image src={FB} alt="" />
        <Image src={X} alt="" />
        <Image src={Pinterest} alt="" />
        <Image src={TIK} alt="" />
        {/* <Image src={} alt="" /> */}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[#A17E6D] text-sm">DOWNLOAD OUR APPS</p>
        <div className="flex gap-6">
          <Image src={PlayStore} alt="" />
          <Image src={IOSStore} alt="" />
        </div>
      </div>
      <div className="flex gap-1 ">
        <div className="underline px-2">
          <p>Privacy Policy</p>
        </div>
        <div className="border-l underline px-2">
          <p>Unsubscribe</p>
        </div>
      </div>
      <div className="text-xs">
        <p>All prices and products are subjects to availability.</p>
        <p>
          To ensure our emails get to you add nestshop@mail.nestshop.com to your
          address book.
        </p>
        <p>&copy; 2024 2024 nestfashion.com</p>
        <p>Designed by SamsteveJR and programmed by frosDev</p>
      </div>
    </footer>
  );
}

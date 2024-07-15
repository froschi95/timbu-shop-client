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
    <footer className="mx-auto">
      <div className="mt-20 bg-white flex flex-col gap-[1.6875rem] items-center text-[#A17E6D] p-4 text-center">
        <div className="flex  flex-col items-center justify-center w-full md:hidden">
          <ul className="grid grid-cols-1 w-[12.875rem]">
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
          <div className="flex gap-6 mt-6">
            <Image src={IG} alt="" />
            <Image src={FB} alt="" />
            <Image src={X} alt="" />
            <Image src={Pinterest} alt="" />
            <Image src={TIK} alt="" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[#A17E6D] text-sm">DOWNLOAD OUR APPS</p>
            <div className="flex gap-6">
              <Image src={PlayStore} alt="" />
              <Image src={IOSStore} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex px-4 py-10 md:gap-10 md:justify-between lg:gap-40">
          <div className="relative flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <Image src={IG} alt="Instagram" />
              <Image src={FB} alt="Facebook" />
              <Image src={X} alt="Twitter" />
              <Image src={Pinterest} alt="Pinterest" />
              <Image src={TIK} alt="TikTok" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[#A17E6D] text-sm">DOWNLOAD OUR APPS</p>
              <div className="flex gap-6">
                <Image src={PlayStore} alt="Google Play Store" />
                <Image src={IOSStore} alt="Apple App Store" />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-2/3 lg:w-full text-[#A17E6D]">
            <div className="flex flex-col gap-4 items-start">
              <h2 className="font-bold">SUPPORT</h2>
              <div className="flex flex-col items-start gap-2">
                <p>About Us</p>
                <p>Shipping</p>
                <p>FAQ</p>
                <p>Recall</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-bold">COMPANY</h2>
              <div className="flex flex-col items-start gap-2">
                <p>About Us</p>
                <p>Careers</p>
                <p>Security</p>
                <p>Brand</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-bold">PRODUCTS</h2>
              <div className="flex flex-col items-start gap-2">
                <p>Features</p>
                <p>Customization</p>
                <p>Collaboration</p>
                <p>Solutions</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-bold">BLOG</h2>
              <div className="flex flex-col items-start gap-2">
                <p>Discount</p>
                <p>Fashion Week</p>
                <p>Promotions</p>
              </div>
            </div>
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
            To ensure our emails get to you add nestshop@mail.nestshop.com to
            your address book.
          </p>
          <p>&copy; 2024 2024 nestfashion.com</p>
          <p>Designed by SamsteveJR and programmed by frosDev</p>
        </div>
      </div>
    </footer>
  );
}

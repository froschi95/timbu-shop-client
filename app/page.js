import Image from "next/image";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
// import BannerImg from "./../public/BannerImg";

const products = [
  // Populate this array with product data based on your design
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: "29.99",
    image: "./../public/BannerImg.png",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: "39.99",
    image: "./../public/BannerImg.png",
  },
  // Add more products as needed
];

export default function Home() {
  return (
    <main className="top-[104px]">
      <Hero />
      <ProductList products={products} />
    </main>
  );
}

"use client";

import { useState } from "react";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import products from "./data/products.json";
import ToggleView from "./components/ToggleView";

export default function Home() {
  const [viewType, setViewType] = useState("list");

  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === "list" ? "grid" : "list"));
    console.log(viewType);
  };

  return (
    <main className="top-[104px] px-6">
      {/* <Hero /> */}
      <div className="flex justify-between">
        <h1>APPAREL</h1>
        <div className="flex">
          <ToggleView viewType={viewType} toggleViewType={toggleViewType} />
        </div>
      </div>
      <ProductList products={products} viewType={viewType} />
    </main>
  );
}

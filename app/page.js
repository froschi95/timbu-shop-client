"use client";

import { useState } from "react";
import ProductListGridView from "./components/ProductListGridView";
import Hero from "./components/Hero";
import products from "./data/products.json";
import ToggleView from "./components/ToggleView";
import ProductListListView from "./components/ProductListListView";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [viewType, setViewType] = useState("grid");

  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === "list" ? "grid" : "list"));
    console.log(viewType);
  };

  return (
    <main className="mx-auto px-6 lg:px-9">
      {/* <Hero /> */}
      <div className="flex justify-between items-center mb-2">
        <h1>APPAREL</h1>
        <div className="flex">
          <ToggleView viewType={viewType} toggleViewType={toggleViewType} />
        </div>
      </div>

      <div className="flex md:gap-20 lg:gap-[131px]">
        {/* <div className="hidden md:flex">
          <Sidebar />
        </div> */}
        <Sidebar />
        <div className="mt-4 mx-auto w-full">
          {viewType === "grid" ? (
            <ProductListGridView products={products} />
          ) : (
            <ProductListListView products={products} />
          )}
        </div>
      </div>
    </main>
  );
}

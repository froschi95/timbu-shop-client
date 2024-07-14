"use client";

import { useState } from "react";
import ProductListGridView from "./components/ProductListGridView";
import Hero from "./components/Hero";
import products from "./data/products.json";
import ProductListListView from "./components/ProductListListView";
import Sidebar from "./components/Sidebar";
import MenuTab from "./components/MenuTab";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

export default function Home() {
  const [viewType, setViewType] = useState("grid");
  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === "list" ? "grid" : "list"));
    console.log(viewType);
  };

  return (
    <>
      <main className="mx-auto px-6 lg:px-9 py-10">
        <MenuTab />
        {/* <Hero /> */}
        <Filters viewType={viewType} toggleViewType={toggleViewType} />
        <div className="flex md:gap-20 lg:gap-[131px]">
          <Sidebar />
          <div className="mt-4 mx-auto w-full">
            {viewType === "grid" ? (
              <ProductListGridView products={products} />
            ) : (
              <ProductListListView products={products} />
            )}
          </div>
        </div>
        <Pagination />
      </main>
      <Footer />
    </>
  );
}

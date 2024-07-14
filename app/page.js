"use client";

import { useState, useEffect } from "react";
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === "list" ? "grid" : "list"));
    console.log(viewType);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/proxy`);
      console.log(res.status);
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("API response is not JSON");
      }

      const result = await res.json();
      setData(result);
      console.log(result);
      setLoading(false);
    };

    fetchData();
  }, []);

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

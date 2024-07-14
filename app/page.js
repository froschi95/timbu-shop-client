"use client";

import { useState, useEffect } from "react";
import ProductListGridView from "./components/ProductListGridView";
import Hero from "./components/Hero";
// import products from "./data/products.json";
import ProductListListView from "./components/ProductListListView";
import Sidebar from "./components/Sidebar";
import MenuTab from "./components/MenuTab";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Loading from "./Loading";

const fetchProducts = async ({
  organization_id,
  reverse_sort,
  page,
  size,
  Appid,
  Apikey,
}) => {
  const url = new URL("https://timbu-get-all-products.reavdev.workers.dev/");
  url.searchParams.append("organization_id", organization_id);
  url.searchParams.append("reverse_sort", reverse_sort);
  url.searchParams.append("page", page);
  url.searchParams.append("size", size);
  url.searchParams.append("Appid", Appid);
  url.searchParams.append("Apikey", Apikey);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default function Home() {
  const [viewType, setViewType] = useState("grid");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const toggleViewType = () => {
    setViewType((prevViewType) => (prevViewType === "list" ? "grid" : "list"));
    console.log(viewType);
  };

  useEffect(() => {
    const params = {
      organization_id: process.env.NEXT_PUBLIC_ORGANISATION_ID,
      reverse_sort: "false",
      page: page,
      size: 20,
      Apikey: process.env.NEXT_PUBLIC_TIMBU_API_KEY,
      Appid: process.env.NEXT_PUBLIC_TIMBU_APP_ID,
    };

    const getProducts = async () => {
      setLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(params);
        setProducts(data.items);
        console.log(data);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [page]);

  if (loading) return <Loading />;
  if (isError) return <div>Error fetching products</div>;
  if (isEmpty) return <div>No products found</div>;

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
          {/* {console.log(products)} */}
        </div>
        <Pagination />
      </main>
      <Footer />
    </>
  );
}

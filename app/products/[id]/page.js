// import React, { useEffect, useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import ImageCard from "../../components/ImageCard";
import PriceBtn from "../../components/PriceBtn";
import Link from "next/link";
import Image from "next/image";
import Close from "/public/Close.svg";

const ProductDetail = async ({ params }) => {
  const { id } = params;
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

  // Fetching product data based on the id
  const products = await fetchProducts({
    organization_id: process.env.NEXT_PUBLIC_ORGANISATION_ID,
    reverse_sort: "false",
    page: 1,
    size: 20,
    Apikey: process.env.NEXT_PUBLIC_TIMBU_API_KEY,
    Appid: process.env.NEXT_PUBLIC_TIMBU_APP_ID,
  });
  const product = products.items.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="container mx-auto px-6 py-6 text-[#A17E6D]">
      <Link href={"/"} className="m-10">
        <Image src={Close} alt="Back" />
      </Link>
      <div className="flex justify-between relative">
        <div className="flex-auto w-full">
          <ProductCard id={product.id} product={product}>
            <PriceBtn price={product.current_price[0].USD[0]} />
          </ProductCard>
        </div>
        <div className="text-sm ml-6">
          <h1 className="font-bold">ZARA OFFICIAL</h1>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-gray-500 ">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

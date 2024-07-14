import React from "react";
import Link from "next/link";
import Image from "next/image";

const ImageCard = ({ product, children }) => {
  return (
    <div className="group shadow rounded-[1.375rem]">
      <div className="relative overflow-hidden h-44 md:h-[16.5rem] w-full bg-transparent rounded-[1.375rem] aspect-h-1 aspect-w-1">
        <Link href={`/products/${product.id}`} className="absolute inset-0">
          <Image
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={`Image for product ${product.id}`}
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default ImageCard;

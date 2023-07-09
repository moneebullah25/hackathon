"use client";
import { useState } from "react";
import { Product } from "@/lib/getProducts";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

const ImageViewer = (product: Product) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <div className="flex flex-row space-x-4">
      <div className="flex flex-col space-y-4 shrink-0">
        {product.images.map((image) => (
          <Image
            className="object-cover cursor-pointer w-100 h-100"
            src={urlForImage(image).url()}
            key={product._id}
            onMouseEnter={() => setCurrentImage(image)}
            alt={`${product.title}`}
            width={100}
            height={100}
          />
        ))}
      </div>
      <Image
        src={urlForImage(currentImage).url()}
        className="object-cover w-570 h-612"
        height={612}
        width={570}
        alt="feature"
      />
    </div>
  );
};

export default ImageViewer;

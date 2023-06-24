"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { urlForImage } from "../../../sanity/lib/image";
import { Product, getProducts } from "@/lib/getProducts";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductView = async () => {
  const router = useRouter();
  const products: Product[] = await getProducts(null);

  return (
    <>
      <div className="mx-[3rem] lg:mx-[6rem] my-6 mt-28">
        <h3 className="text-blue-600 text-center font-bold"> PRODUCTS</h3>
        <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
          Check What We Have
        </h1>
        <Carousel
          arrows={false}
          responsive={responsive}
        >
          {products.map((product) => (
            <div
              className="hover:scale-105 transition cursor-pointer m-6"
              onClick={() => router.push(`/${product._id}`)}
            >
              <Image
                width={380}
                height={400}
                className="object-cover"
                src={urlForImage(product.images[0]).url()}
                alt={`${product.title}`}
              />
              <h3 className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight">
                {product.title}
              </h3>
              <h3 className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight">
                ${product.price}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProductView;



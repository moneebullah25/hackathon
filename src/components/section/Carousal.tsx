"use client";
import {useRouter} from "next/navigation"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "@/lib/getProducts";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

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

const Carousal = (products: Product[]) => {
    const router = useRouter();
    return (
    <div>
      <Carousel arrows={false} responsive={responsive} ssr={true}>
          {Object.values(products).map((product) => (
            <div
              className="hover:scale-105 transition cursor-pointer m-6"
              onClick={() => router.push(`/product/${product._id}`)}
              key={product._id}
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
                PKR{product.price}
              </h3>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Carousal;

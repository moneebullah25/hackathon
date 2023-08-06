"use client";
import { Product } from "@/lib/getProducts";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useRouter } from "next/navigation";

const DisplayProduct = (product: Product) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/product/${product._id}`)} className="cursor-pointer">
      <Image
        width={250}
        height={270}
        className="object-cover hover:scale-105 transition cursor-pointer"
        src={urlForImage(product.images[0]).url()}
        alt={`${product.title}`}
      />
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mt-4" >
        {product.title}
      </h3>
      <h3 className="scroll-m-20 text-lg font-medium tracking-tight">
        {product.categorySet[0]}
      </h3>
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
        ${product.price}
      </h3>
    </div>
  );
};

export default DisplayProduct;

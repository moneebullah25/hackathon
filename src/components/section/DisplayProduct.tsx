import { Product } from "@/lib/getProducts";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

const DisplayProduct = (product: Product) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="cursor-pointer">
        <Image
          width={250}
          height={270}
          className="object-cover hover:scale-105 transition cursor-pointer m-6"
          src={urlForImage(product.images[0]).url()}
          alt={`${product.title}`}
        />
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          {product.title}
        </h3>
        <h3 className="scroll-m-20 text-lg font-medium tracking-tight">
          {product.categorySet[0]}
        </h3>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          ${product.price}
        </h3>
      </div>
    </Link>
  );
};

export default DisplayProduct;

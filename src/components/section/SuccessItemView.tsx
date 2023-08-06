import Image from "next/image";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { useAppSelector } from "@/store/hooks";
import { Product } from "@/lib/getProducts";

const SuccessItemView: FC<{ item: Product }> = ({ item }) => {
  const cartList = useAppSelector((state) => state.cart.cartItems);
  while (cartList.length > 0) {
    cartList.pop();
  }
  return (
    <section
      className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start 
        sm:max-w-[620px] md:max-w-[720px] lg:max-w-[920px] md:gap-x-4"
    >
      <div className="mb-[20px] lg:mb-0">
        <Image
          src={urlForImage(item.images[0]).url()}
          alt={item.title}
          height={200}
          width={200}
          className="lg:w-[190px] md:w-[200px]"
        />
      </div>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-center md:gap-y-[2px] lg:gap-y-2">
          <h1 className="font-bold text-[20px] font-arimo">{item.title}</h1>
          <span className="font-bold tracking-tighter text-gray-500">
            {item.category.name}
          </span>
          <p className="lg:font-bold font-inconsolata flex flex-col lg:flex-row">
            Delievery Estimation:
            <span className="font-medium text-yellow-500">5 Working Days</span>
          </p>
          <div className="flex items-center justify-start gap-x-4">
            <span className="lg:font-bold font-inconsolata">Quantity: </span>

            <span className="font-medium">{item.quantity}</span>
          </div>
          <span className="font-bold font-inconsolata">
            {item.price * item.quantity} PKR
          </span>
        </div>
      </div>
    </section>
  );
};

export default SuccessItemView;

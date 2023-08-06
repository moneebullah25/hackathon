"use client";

import Image from "next/image";
import React, { useState, FC } from "react";

import { Trash2 } from "lucide-react";
import { urlForImage } from "../../../sanity/lib/image";

import { Product } from "@/lib/getProducts";
import { removeFromCart } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import { updateCart } from "@/store/slice/cartSlice";

const CartItem: FC<{ item: Product }> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const dispatch = useAppDispatch();

  const addQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(updateCart({ ...item, quantity: quantity + 1 }));
  };

  const removeQuantity = () => {
    setQuantity(quantity - 1);
    dispatch(updateCart({ ...item, quantity: quantity - 1 }));
  };

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
            <button
              className=" bg-gray-200 p-1 cursor-pointer rounded-full hover:bg-[#fdfdfc] hover:border 
                        hover:border-black text-[14px]"
              onClick={removeQuantity}
              disabled={quantity == 1}
            >
              -
            </button>
            <span className="font-medium">{quantity}</span>
            <button
              className=" bg-gray-200 p-1 cursor-pointer rounded-full hover:bg-[#fdfdfc] 
                        hover:border hover:border-black text-[14px]"
              onClick={addQuantity}
            >
              +
            </button>
          </div>
          <span className="font-bold font-inconsolata">
            {item.price * quantity} PKR
          </span>
        </div>
        <div className="text-[22px] cursor-pointer">
          <Trash2
            onClick={() => {
              dispatch(removeFromCart(item.title));
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CartItem;

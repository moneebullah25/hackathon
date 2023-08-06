"use client";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import SuccessItemView from "@/components/section/SuccessItemView";

const page = () => {
  const cartList = useAppSelector((state) => state.cart.cartItems);
  let subTotal: number = 0;
  cartList.map((product) => (subTotal += product.quantity * product.price));
  return (
    <div className="mx-[3rem] lg:mx-[6rem] my-6">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Thanks for Shopping with us
      </h1>
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Your order has been placed!
      </h1>
      <div className="container relative mx-auto">
      {cartList.map((item) => (
        <SuccessItemView item={item} key={item.title} />
      ))}
      </div>
    </div>
  );
};

export default page;

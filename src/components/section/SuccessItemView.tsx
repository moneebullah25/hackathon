"use client";
import React, { FC } from "react";
import { useAppSelector } from "@/store/hooks";

const SuccessItemView: FC = () => {
  const cartList = useAppSelector((state) => state.cart.cartItems);
  while (cartList.length > 0) {
    cartList.pop();
  }
  return (
    <div className="mx-[3rem] lg:mx-[6rem] my-6">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Thanks for Shopping with us
      </h1>
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Your order has been placed!
      </h1>
    </div>
  );
};

export default SuccessItemView;

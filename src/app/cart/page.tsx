"use client";

import React, { useMemo, useState } from "react";
import CartItem from "@/components/section/CartItem";

import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import getStipePromise from "@/lib/stripe";

export default function Cart() {
  const cartList = useAppSelector((state) => state.cart.cartItems);
  let subTotal: number = 0;
  cartList.map((product) => (subTotal += product.quantity * product.price));

  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartList),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
      cartList.map(async (product) => {
        const response = await fetch("/api/cart/", {
          method: "POST",
          cache: "no-cache",
          body: JSON.stringify({
            product_id: product._id,
            quantity: product.quantity
          })
        })
      })
    }
  };

  return (
    <main className="sm:max-w-[450px] md:max-w-[950px] lg:max-w-[1400px] mt-[100px] px-6 md:px-10 mx-auto">
      {cartList.length > 0 && (
        <>
          <h1 className="font-bold font-arimo text-4xl ">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row lg:items-start ">
            <section className="flex flex-col mt-[50px] gap-y-6 lg:w-[80%]">
              {cartList.map((item) => (
                <CartItem item={item} key={item.title} />
              ))}
            </section>
            <section className=" bg-[#fdfdfd] mt-[50px] lg:w-[30%]">
              <div className="flex flex-col items-between gap-y-6">
                <h1 className="font-bold font-arimo text-[20px]">
                  Order Summary
                </h1>
                <div className="flex items-center justify-between font-arimo gap-x-6">
                  <span>Total Products</span>
                  <span>{cartList.length} Product</span>
                </div>
                <div className="flex items-center justify-between font-arimo gap-x-6">
                  <span>Total Quantities</span>
                  <span>
                    {cartList.reduce((total, item) => total + item.quantity, 0)}{" "}
                    Items
                  </span>
                </div>
                <div className="flex items-center justify-between font-arimo gap-x-6">
                  <span>Sub Total</span>
                  <span className="font-bold">{subTotal} PKR</span>
                </div>
                <button
                  className="bg-black text-white py-3 font-inconsolata rounded-lg"
                  onClick={handleCheckout}
                >
                  Process to Checkout
                </button>
              </div>
            </section>
          </div>
        </>
      )}
      {cartList.length < 1 && (
        <section
          className="sm:max-w-[450px] md:max-w-[950px] lg:max-w-[1400px] mt-[100px] px-4 md:px-10 mx-auto
             flex flex-col items-center justify-center"
        >
          <Image
            src="/emptyCart.png"
            alt="Empty Cart Page"
            width={600}
            height={600}
          />

          <div className="mt-[50px] flex flex-col items-center justify-center font-inconsolata gap-y-4">
            <span className="text-xl md:text-3xl text-center font-bold">
              Looks like this cart is on a diet, it is empty!
            </span>
            <span className="text-center text-[16px] md:text-[20px]">
              Go ahead and explore our products
            </span>
            <Link href="/">
              <button className="px-8 py-2 bg-black text-white rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

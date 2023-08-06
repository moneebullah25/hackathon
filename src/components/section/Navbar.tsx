"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "public/Logo.webp";
import { Search, ShoppingCartIcon } from "lucide-react";
import hamburger from "public/hamburger.svg";
import close from "public/close.svg";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 z-10">
        <div className="justify-between mx-[3rem] lg:mx-[6rem] my-6 lg:items-center lg:flex">
          <div className="flex items-center justify-between lg:block">
            {/* LOGO */}
            <Link href="/">
              <Image src={logo} alt="Logo" width={140} height={25} />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src={close} width={30} height={30} alt="close" />
                ) : (
                  <Image
                    src={hamburger}
                    width={30}
                    height={30}
                    alt="hamburger"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "p-12 lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
                <li className="pb-6 text-lg py-4 px-2 xl:px-5 text-center hover:underline">
                  <Link href="/female" onClick={() => setNavbar(!navbar)}>
                    Female
                  </Link>
                </li>
                <li className="pb-6 text-lg py-4 px-2 xl:px-5 text-center hover:underline">
                  <Link href="/male" onClick={() => setNavbar(!navbar)}>
                    Male
                  </Link>
                </li>
                <li className="pb-6 text-lg py-4 px-2 xl:px-5 text-center hover:underline">
                  <Link href="/kids" onClick={() => setNavbar(!navbar)}>
                    Kids
                  </Link>
                </li>
                <li className="pb-6 text-lg py-4 px-2 xl:px-5 text-center hover:underline">
                  <Link href="/allproducts" onClick={() => setNavbar(!navbar)}>
                    All Products
                  </Link>
                </li>
                <li className="lg:hidden flex justify-center mb-6">
                  <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <SignedOut>
                    {/* Signed out users get sign in button */}
                    <SignInButton mode="modal">
                      <Button variant={"default"} size={"lg"}>
                        Sign In
                      </Button>
                    </SignInButton>
                  </SignedOut>
                </li>
                <li>
                  <div
                    className="lg:hidden flex justify-center p-2 rounded-full bg-gray-300 hover:cursor-pointer mb-1"
                    onClick={() => router.push("/cart")}
                  >
                    <ShoppingCartIcon className="relative hover:scale-110" />
                    <span className="absolute h-6 w-6 ml-12 text-center rounded-full bg-[#f02d34] text-white">
                      {cartItems.length}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex border pl-1 pr-28 py-1 mb-1">
            <Search className="bg-white rounded-l" />{" "}
            <input
              type="text"
              placeholder="What you are looking for"
              className="rounded-r outline-none"
            ></input>
          </div>
          <div
            className="hidden p-2 rounded-full bg-gray-300 hover:cursor-pointer mb-1 lg:flex lg:flex-row lg:space-x-2 relative"
            onClick={() => router.push("/cart")}
          >
            <ShoppingCartIcon className="relative hover:scale-110" />
            <span className="absolute h-6 w-6 top-0 right-0 text-center rounded-full bg-[#f02d34] text-white">
              {cartItems.length}
            </span>
          </div>
          <div className="hidden lg:block h-8 w-8">
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              {/* Signed out users get sign in button */}
              <SignInButton mode="modal">
                <Button variant={"default"} size={"lg"}>
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

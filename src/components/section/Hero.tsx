import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import header from "public/header.webp";
import Feature1 from "public/Featured1.webp";
import Feature2 from "public/Featured2.webp";
import Feature3 from "public/Featured3.webp";
import Feature4 from "public/Featured4.webp";

const Hero = () => {
  return (
    <div className="flex justify-between mx-[3rem] lg:mx-[6rem] my-6 items-center">
      <div>
        <Button variant={"sale"}>
          Sale 70%
        </Button>

        <h1 className="scroll-m-20  text-4xl font-extrabold tracking-tight lg:text-5xl mt-12">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 text-2xl [&:not(:first-child)]:mt-12">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <Button variant={"default"} size={"lg"} className="mt-12">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Start Shopping
        </Button>

        <div className="hidden lg:flex flex-row justify-between items-center space-x-3 mt-12">
          <Image src={Feature1} alt="Feature1" />
          <Image src={Feature2} alt="Feature2" />
          <Image src={Feature3} alt="Feature3" />
          <Image src={Feature4} alt="Feature4" />
        </div>
      </div>
      <Image
        src={header}
        alt="header"
        className="hidden md:block"
      />
      <div className="hidden md:block absolute bg-[#ffece3] right-44 rounded-full w-[520px] h-[520px] -z-10"></div>
    </div>
  );
};

export default Hero;

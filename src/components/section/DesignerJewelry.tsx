import Image from "next/image";
import { Button } from "../ui/button";

import feature from "public/feature.webp";
import Link from "next/link";

const DesignerJewelry = () => {
  return (
    <div className="mx-[3rem] lg:mx-[6rem] my-6 mt-28">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:text-left lg:w-1/2 lg:ml-auto mb-8">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-16 lg:space-y-0">
        <div className="hidden md:block absolute left-[80px] text-gray-200 font-black text-8xl -z-10">
          Different
          <br />
          from
          <br />
          others
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-16">
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Using Good Quality Materials
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              100% Handmade Products
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Modern Fashion Design
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Discount for Bulk Orders
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-8">
          <Image src={feature} alt="picture" className="w-[285px] h-[350px]" />
          <div>
            <p className="leading-7 my-6 [&:not(:first-child)]:mt-6 lg:max-w-xl">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button variant={"default"} size={"lg"} className="mt-12">
              <Link href="/allproducts">See All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerJewelry;

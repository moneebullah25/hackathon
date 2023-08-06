import React from "react";
import event1 from "public/event1.webp";
import event2 from "public/event2.webp";
import event3 from "public/event3.webp";
import Image from "next/image";

const Promotions = () => {
  return (
    <>
      <div className="mx-[3rem] lg:mx-[6rem] my-6">
        <h3 className="text-blue-600 text-center font-bold"> PROMOTIONS</h3>
        <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
          Our Promotions Events
        </h1>
        
        <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 my-6">
          
          <div className="flex flex-row justify-between items-center col-span-2 lg:col-span-2 bg-[#d6d6d8]">
            <div className="pl-2">
              <h1 className="text-center text-4xl font-bold">
                Get up to{" "}
                <span className="text-center text-5xl font-bold">60%</span>
              </h1>
              <h3 className="text-2xl text-center"> For the summer season</h3>
            </div>
            <Image src={event1} alt="event1" />
          </div>

          <div className="bg-[#efe1c7] col-span-2 lg:row-span-2 lg:col-span-1">
            <h3 className="pl-4 pt-8 text-black text-lg text-left">
              Flex Sweatshirt
            </h3>
            <h3 className="pl-4 pt-1 text-black text-lg text-left">
              <span className="line-through">PKR 100.00</span>{" "}
              <span className="text-center text-xl no-underline font-bold">
                PKR 75.00
              </span>
            </h3>
            <Image src={event2} alt="event2" />
          </div>

          <div className="bg-[#f0f8ff] col-span-2 lg:row-span-2 lg:col-span-1">
            <h3 className="pl-4 pt-8 text-black text-lg text-left">
              Flex Push Button Bomber
            </h3>
            <h3 className="pl-4 pt-1 text-black text-lg text-left">
              <span className="line-through">PKR 225.00</span>{" "}
              <span className="text-center text-xl no-underline font-bold">
                PKR 175.00
              </span>
            </h3>
            <Image src={event3} alt="event3" />
          </div>

          <div className="flex flex-col bg-[#212121] items-center justify-center col-start-1 row-start-2 col-span-2">
            <h1 className="text-center text-4xl font-bold text-white">
              Get 30%
              <span className="text-center text-5xl font-bold text-white">
                OFF
              </span>
            </h1>
            <h3 className=" text-white text-2xl text-center">
              {" "}
              For the summer season
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;

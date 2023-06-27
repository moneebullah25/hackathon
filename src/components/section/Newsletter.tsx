import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <>
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-gray-200 font-black text-8xl -z-10 text-center">
        Newsletter
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
        Subscribe to our Newsletter
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
        Get the latest information and promo offers directly
      </p>
      <div className="text-center">
        <input type="text" className="text-center py-[0.3rem] border-2" />
        <Button variant={"default"} size={"sm"}>
          Get Started
        </Button>
      </div>
    </>
  );
};

export default Newsletter;

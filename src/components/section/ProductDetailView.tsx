"use client";
import { Product } from "@/lib/getProducts";
import ImageViewer from "@/components/ImageViewer";
import QtyCounter from "@/components/QtyCounter";
import { addToCart } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

const ProductDetailView = (product: Product) => {
  const dispatch = useAppDispatch();
  const addItem = (product: Product) => {
    dispatch(addToCart(product));
    toast.success("Product added");
  };

  return (
    <div>
      <div className="mx-[1rem] lg:mx-[6rem] my-6">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 ">
          <ImageViewer {...product} />
          <div className="shrink-0">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {product.title}
            </h3>
            <h3 className="scroll-m-20 text-1xl font-medium tracking-tight">
              {product.categorySet[0]}
            </h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              SELECT SIZE
            </h4>
            <div className="flex flex-row sm:space-x-1 lg:space-x-4">
              {Object.values(product.sizeSet).map((size, index) => (
                <div
                  className="flex w-12 h-12 rounded-full hover:shadow-lg items-center justify-center"
                  key={index}
                >
                  {size}
                </div>
              ))}
            </div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-4 flex flex-row justify-start items-center">
              QUANTITY:{"  "}
              <QtyCounter />
            </h4>
            <Button onClick={() => addItem(product)}>Add to Cart</Button>
            <h4 className="inline scroll-m-20 text-xl font-semibold tracking-tight">
              {"  PKR" + product.price}.00
            </h4>
          </div>
        </div>

        <div className="my-12">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Product Information
          </h3>
          <hr className="w-auto h-1 mx-auto my-8 bg-gray-400 border-0 rounded md:my-10" />
          <div className="flex flex-col lg:flex-row my-8">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:w-2/6">
              Product Details
            </h3>
            <p className="leading-7 my-8 lg:my-0 space-x-8 space-y-8 lg:w-3/4">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row my-8">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:w-2/6">
              Product Care
            </h3>
            <div className="lg:w-3/4">
              {product.care.map((data, index) => (
                <li
                  className="leading-7 my-8 font-extrabold lg:my-0 space-x-8 space-y-8"
                  key={index}
                >
                  {data}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;

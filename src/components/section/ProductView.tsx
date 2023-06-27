"use client";
import { useState, useEffect } from "react";
import Carousal from "./Carousal";
import { Product, getProducts } from "@/lib/getProducts";

const ProductView = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData: Product[] = await getProducts(null);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-[3rem] lg:mx-[6rem] my-6 mt-28">
      <h3 className="text-blue-600 text-center font-bold"> PRODUCTS</h3>
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Check What We Have
      </h1>
      {loading ? <p>Loading...</p> : <Carousal {...products} />}
    </div>
  );
};

export default ProductView;

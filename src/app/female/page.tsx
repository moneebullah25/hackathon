import { Product, getProducts, CATEGORY } from "@/lib/getProducts";
import DisplayProduct from "@/components/section/DisplayProduct";

const page = async () => {
  const products: Product[] = await getProducts(CATEGORY.FEMALE);

  return (
    <div className="grid grid-cols-2 gap-16 lg:grid-cols-3 xl:grid-cols-4 mx-[3rem] lg:mx-[6rem] my-6">
      {products.map((product) => (
        <DisplayProduct {...product} key={product._id}/>
    ))}
    </div>
  );
};

export default page;

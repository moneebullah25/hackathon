import { getProductsWithID, Product } from "@/lib/getProducts";
import ProductDetailView from "@/components/section/ProductDetailView";

export default async function Page({ params }: { params: { id: string } }) {
  const product: Product = (await getProductsWithID(params.id))[0];
  return (
    <ProductDetailView {...product} />
  );
}

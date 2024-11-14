import { Suspense } from "react";
import { Product } from "@/app/components/Product";
import { fetchProduct } from "@/app/utils";
import { ProductResponse } from "@/app/types";
import Loading from "@/app/loading";

interface Params {
  id: string;
}

const LoadProduct = async (id: string) => {

  const product: ProductResponse = await fetchProduct(id, '2');

  return <Product product={product} />;

}


export default async function ProductPage({ params }: { params: Promise<Params> }) {

  const { id } = (await params);

  return (

    <Suspense fallback={<Loading />}>

      {LoadProduct(id)}

    </Suspense>

  );

}


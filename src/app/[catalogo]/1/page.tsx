'use server'

import { fetchProducts } from "@/app/utils";
import { ProductsResponse } from "@/app/types";
import { Anticoccidianos } from "@/app/components/Products/1/Anticoccidianos";
import { Suspense } from "react";
import Loading from "@/app/loading"


const LoadProducts = async () => {

  const products: ProductsResponse[] = await fetchProducts("1");

  return <Anticoccidianos products={products} />;
}

export default async function EspecialidadesNutricionalesPage() {

  return (
    <>
      <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

      <Suspense fallback={<Loading />}>
        <LoadProducts />
      </Suspense>

    </>
  )
}

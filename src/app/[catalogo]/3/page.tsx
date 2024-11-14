'use server'
import { Adsorbentes } from "@/app/components/Products/3/Adsorbentes"
import { fetchProducts } from "@/app/utils"
import { ProductsResponse } from '@/app/types'
import { Suspense } from "react"
import Loading from "@/app/loading"

const LoadProducts = async () => {

      const products: ProductsResponse[] = await fetchProducts("3");

      return <Adsorbentes products={products} />;
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
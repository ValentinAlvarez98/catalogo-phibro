'use server'
import { fetchProducts } from "@/app/utils"
import { Especialidades } from '@/app/components/Products/2/Especialidades'
import { ProductsResponse } from '@/app/types'
import { Suspense } from "react"
import Loading from "@/app/loading"

const LoadProducts = async () => {

      const products: ProductsResponse[] = await fetchProducts("2");

      return <Especialidades products={products} />;
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

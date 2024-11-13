import { fetchProducts } from "@/app/utils"
import { Vacunas } from '@/app/components/Products/4/Vacunas'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ProductsResponse } from '@/app/types'
export default async function VacunasPage() {

      const LoadProducts = async () => {
            // Cargando productos de manera asíncrona
            const products: ProductsResponse[] = await fetchProducts("4");
            return <Vacunas products={products} />;
          }

      return (
            <>
                  
                  <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

                   <Suspense fallback={<Loading />}>
      <LoadProducts />
    </Suspense>

            </>
      )

}
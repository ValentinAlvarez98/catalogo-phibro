import { Adsorbentes } from "@/app/components/Products/3/Adsorbentes"
import { fetchProducts } from "@/app/utils"
import { Suspense } from "react"
import Loading from "@/app/loading"
import { ProductsResponse } from '@/app/types'
export default async function AdsorbentesYMineralesPage() {

    

      const LoadProducts = async () => {
            // Cargando productos de manera asíncrona
            const products: ProductsResponse[] = await fetchProducts("3");
            return <Adsorbentes products={products} />;
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
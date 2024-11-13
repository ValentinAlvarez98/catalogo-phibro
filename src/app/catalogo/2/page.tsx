import { PhibroButton } from "@/app/components/PhibroButton"
import { PhibroNavegation } from "@/app/components/PhibroNavegation"
import { fetchProducts } from "@/app/utils"
import { Especialidades } from '@/app/components/Products/2/Especialidades'
import { ProductsResponse } from '@/app/types'
import { Suspense } from "react"
import Loading from "@/app/loading"

export default async function EspecialidadesNutricionalesPage() {
      const LoadProducts = async () => {
            // Cargando productos de manera asíncrona
            const products: ProductsResponse[] = await fetchProducts("2");
            return <Especialidades products={products} />;
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

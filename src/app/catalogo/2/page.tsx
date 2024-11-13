import { PhibroButton } from "@/app/components/PhibroButton"
import { PhibroNavegation } from "@/app/components/PhibroNavegation"
import { fetchProducts } from "@/app/utils"
import { Especialidades } from '@/app/components/Products/2/Especialidades'

export default async function EspecialidadesNutricionalesPage() {
      const products = await fetchProducts("2")

      return (
            <>
                  <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

                  <Especialidades products={products} />


            </>
      )
}

import { fetchProducts } from "@/app/utils"
import { ProductsResponse } from "@/app/types"
import { Anticoccidianos } from "@/app/components/Products/1/Anticoccidianos"

export default async function AnticoccidianosYAntibioticosPage() {

      const products: ProductsResponse[] = await fetchProducts("1")

      return (
            <>
                  <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

                  <Anticoccidianos products={products} />

            </>
      )
}

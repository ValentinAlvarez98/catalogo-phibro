
import { Product } from "@/app/components/Product";
import { fetchProduct } from "@/app/utils";
import { ProductResponse } from "@/app/types";


interface ProductsPageProps {
      params: {
            id: string
      }
}

export default async function ProductPage({ params }: ProductsPageProps) {

      const { id } = await params

      const product: ProductResponse = await fetchProduct(String(id), '1')


      return (

            <div >
                  <Product product={product} />
            </div>

      )

}
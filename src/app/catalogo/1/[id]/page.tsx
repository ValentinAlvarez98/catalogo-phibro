
import { Product } from "@/app/components/Product";
import { fetchProduct } from "@/app/utils";


interface ProductsPageProps {
      params: {
            id: string
      }
}

export default async function ProductPage({params } : ProductsPageProps) {

    const { id } = await params

    const product : ProductResponse = await fetchProduct(String(id),'1')

    console.log(product)


      return (

            <div >
               <Product product={product}/>
            </div>

      )

}
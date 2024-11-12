import { PhibroButton } from "@/app/components/PhibroButton"
import { PhibroNavegation } from "@/app/components/PhibroNavegation"
import { fetchProducts } from "@/app/utils"
import Link from "next/link"

export default async function AnticoccidianosYAntibioticosPage() {
      const products = await fetchProducts("1")

      console.log(products)

      return (
            <>
   <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

   <PhibroNavegation back={"/catalogo"} nextStep={"catalogo/2"} position={false} />

   <div className=" relative flex flex-col items-center justify-center gap-20 min-h-screen ">

   <PhibroButton title={"ANTICOCCIDIANOS Y ANTIBIÓTICOS"} variant={false} index={4} link={"/catalogo/1"} ></ PhibroButton>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 px-8">

      
{products.map((product) => (
      <Link key={product.id} href={`/catalogo/1/${product.id}`} className="border rounded-lg p-4 shadow-md">
            
            <img 
                  src={product.logo} 
                  alt="logo" 
                  className="w-20 h-20"
            />
          
      </Link>
))}
</div> 

</div>

            </>
      )
}

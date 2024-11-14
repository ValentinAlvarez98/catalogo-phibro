import { Subtitle } from "../components/Boards/Subtitle";
import { Title } from "../components/Boards/Title";
import { PhibroNavegation } from "../components/PhibroNavegation";




export default  function InstitucionalPage() {


      return (

            <div className="mt-[400px]">
                  <PhibroNavegation  nextStep={"institucional/2"} position={true} />
                  <Title title={"INSTITUCIONAL"} marginBottom />
                  <section className="flex flex-col gap-40 items-center justify-center w-full">
                     
                  <Subtitle title={"PROPÓSITO"} position={"right"} text={"Optimizar la salud y la nutrición de los animalespara una vida mejor y un mundo más sustentable."}/>
              
                 
                  <Subtitle title={"MISIÓN"} position={"left"}  text={"Brindando soluciones seguras y efectivas para los desafíos únicos de nuestros clientes"}/>
                  </section>

                  
            </div>      

      )

}
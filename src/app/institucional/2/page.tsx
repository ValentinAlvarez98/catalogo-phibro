import { Title } from "@/app/components/Boards/Title";
import { PhibroNavegation } from "../../components/PhibroNavegation";
import { Subtitle } from "@/app/components/Boards/Subtitle";
import { Qr } from "@/app/components/Qr";

export default async function InstitucionalPage2() {

      return (

            <>

                  <div className="mt-[400px]">

                        <PhibroNavegation back={"/institucional"} />

                        <Title title={"INSTITUCIONAL"} marginBottom />

                        <section className="flex flex-col gap-10 items-center justify-center w-full">

                              <Subtitle title={"VALORES"} position={"right"} text={"Mantener a los animales sanos: mantener a los animales sanos ayuda a mantenera las familias sanas y contribuye a alimentara un mundo en crecimiento.Hacer lo correcto para nuestros clientes generarelaciones significativas y duraderas.Enfocarnos en sus necesidades nos inspiraa desarrollar soluciones innovadoras. La inversión continua en nuestra empresa es esencial para el futuro. El éxito se basa en la pasión por la excelencia y la voluntad de cada miembro del equipo para dar lo mejor"} />

                              <Subtitle title={"CONOZCA NUESTRO INFORME ESG"} position={"left"} />

                        </section>

                  </div>

                  <Qr qr={'/imgs/qrs/qrInstitucional.jpg'} />

            </>

      )

}
'use client'
import { PhibroNavegation } from "../PhibroNavegation"
import { Title } from "../Boards/Title"
import { motion } from 'framer-motion'

export function Bosque() {

      return (

            <div className="mt-80">
                  <PhibroNavegation nextStep={"products/4"} position={true} />
                  <Title title={"AMIGO DEL BOSQUE"} marginBottom />

                  <motion.img
                        src="/imgs/logo.png"
                        alt="Phibro Logo"
                        /* This logo should be at bottom left */
                        className="w-80 md:w-80 fixed bottom-40 right-32 ml-8 mb-8"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                  />

                  <div className="-z-10 bg-green w-[85%] py-2 -skew-x-12 shadow-xl fixed bottom-36 left-0">


                  </div>


            </div>

      )

}
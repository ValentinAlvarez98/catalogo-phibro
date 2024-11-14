'use client'

import { motion } from 'framer-motion'
import { PhibroButton } from './PhibroButton';

export function Home() {

      return (

            <>

                  <div id='marcoYHojas' className="absolute inset-0 z-0" />


                  <div className=" relative flex flex-col items-center justify-center min-h-screen ">

                        <motion.img
                              src="/imgs/logo.png"
                              alt="Phibro Logo"
                              className="absolute w-[550px] md:w-[550px] top-72 mt-36"
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                        />

                        <div className={'flex flex-col gap-20'}>

                              <PhibroButton title={"INSTITUCIONAL"} variant={true} index={1} link={'institucional'} />

                              <PhibroButton title={"SOLUCIONES PHIBRO"} variant={true} index={2} link={'catalogo'} />

                              <PhibroButton title={"AMIGO DEL BOSQUE"} variant={true} index={3} link={'bosque'} />

                        </div>

                  </div>

            </>

      )

}
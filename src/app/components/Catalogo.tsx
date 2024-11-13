'use client'
import { motion } from 'framer-motion'
import { PhibroButton } from './PhibroButton'
import { PhibroNavegation } from './PhibroNavegation'
import { Title } from './Boards/Title'

export function Catalogo() {

      return (
            <>
                  <div id='marcoYHojas' className="absolute inset-0 z-0"></div>


                  <PhibroNavegation nextStep={"catalogo/1"} position={false} />

                  <div className=" relative flex flex-col items-center justify-center gap-20 min-h-screen ">
                        <div className='mr-auto ml-8 mt-20 -z-10'>
                              <Title title={"CATÁLOGO"} />
                        </div>
                        <PhibroButton title={"ANTICOCCIDIANOS Y ANTIBIÓTICOS"} variant={false} index={1} link={"catalogo/1"}></ PhibroButton>
                        <PhibroButton title={"ESPECIALIDADES NUTRICIONALES"} variant={false} index={2} link={"catalogo/2"}></ PhibroButton>
                        <PhibroButton title={"ADSORBENTES Y MINERALES"} variant={false} index={3} link={"catalogo/3"}></ PhibroButton>
                        <PhibroButton title={"VACUNAS"} variant={false} index={4} link={"catalogo/4"}></ PhibroButton>

                        <motion.img
                              src="/imgs/logo.png"
                              alt="Phibro Logo"
                              className="w-80 md:w-80 ml-56 -mt-4"
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                        />

                  </div>


            </>

      )

}
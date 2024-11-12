'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react';
import { useState } from 'react'
import { PhibroButton } from './PhibroButton';

export function Home() {



      return (
            <>

                  <div id='marcoYHojas' className="absolute inset-0 z-0"></div>

                  {/* Contenido principal */}
                  <div className=" relative flex flex-col items-center justify-center   min-h-screen ">

                        {/* Logo */}
                        <motion.img
                              src="/imgs/logo.png"
                              alt="Phibro Logo"
                              className="absolute w-80 md:w-80 top-72"
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                        />
                        <div className={'flex flex-col gap-20'}>
                              <PhibroButton title={"INSTITUCIONAL"} primaryColor={"green"} secondColor={"blue"} index={1} link={'institucional'}></PhibroButton>
                              <PhibroButton title={"SOLUCIONES PHIBRO"} primaryColor={"green"} secondColor={"blue"} index={2} link={'catalogo'}></PhibroButton>
                              <PhibroButton title={"AMIGO DEL BOSQUE"} primaryColor={"green"} secondColor={"blue"} index={3} link={'bosque'}></PhibroButton>
                        </div>
                  </div>
            </>
      )

}
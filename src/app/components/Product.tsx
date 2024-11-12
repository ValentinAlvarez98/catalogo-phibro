'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react';
import { useState } from 'react'
import { PhibroButton } from './PhibroButton';
import { PhibroNavegation } from './PhibroNavegation';
import { Subtitle } from './Boards/Subtitle';
import { Country } from './Boards/Countrys';

export function Product({product}) {

      const backUrl = product.prevProduct ? `/catalogo/${product.categoryId}/${product.prevProduct}` : undefined
      const nextUrl = product.nextProduct ? `/catalogo/${product.categoryId}/${product.nextProduct}` : undefined

      return (
            <>
   <PhibroNavegation back={backUrl} nextStep={nextUrl} position />


                  {/* Contenido principal */}
                  <div className=" relative flex flex-col items-center justify-center gap-32   min-h-screen ">

<div className='-mt-[350px] flex flex-col items-center  -mb-20'>
    <div className='border-2  shadow-2xl'>
                     {product.logo && <img src={product.logo} alt="logo" className="w-20 h-20" />}
                     </div>
                    <h2 className='mt-5 text-3xl font-bold text-blue'>{product.type}</h2>
                    </div>
                <Subtitle title='Descripción' position='left' text={product.description} variant />

            <Subtitle title='Composición' position='right' text={product.composition} />

            <Country countrys={product.countries} />
    
                  </div>
            </>
      )

}
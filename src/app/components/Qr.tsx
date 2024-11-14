'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react';
import { useState } from 'react'
import { PhibroButton } from './PhibroButton';
import Image from 'next/image';


type qrProps = {
      variant?: boolean;
      qr: string;
}

export function Qr({variant, qr}: qrProps) {

  

      const variantStyle = {
        text: variant ? "Accede al material técnico" : "Escanee el Código QR",
        width: variant ? 'w-[45%]' : 'w-[70%]',
        position: variant ? 'bottom-[450px]' : '  bottom-[280px] ',
       image: variant ? 180 : 220,
       pr: variant ? 'pr-10' : 'pr-20',
      mbText: variant ? 'mb-1' : 'mb-5',
            fontSize: variant ? "text-3xl" : "text-5xl",
       fontType: variant ? "font-bold" : "fond-semibold"
      }
      
      return (
        <>
            <div className={`${variantStyle.width} ${variantStyle.position} ${variantStyle.pr} shadow-2xl -left-20  absolute flex flex-col items-end   py-4 bg-white border-black skew-x-12 `}>
                  <div className="-skew-x-12 flex flex-col items-center">
                        <p className={`${variantStyle.mbText} ${variantStyle.fontSize}  ${variantStyle.fontType} text-blue `}>{variantStyle.text}</p>

                        <Image
                        width={variantStyle.image}
                        height={variantStyle.image}
                        src={qr}
                        alt="Phibro Logo"
                        className=" h-full object-contain"
                        priority={true}
                        />
                  </div>
            </div>
       </>
      )

}
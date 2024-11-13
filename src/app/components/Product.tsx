'use client'
import { ProductCard } from './Products/ProductCard';
import { PhibroNavegation } from './PhibroNavegation';
import { PhibroButton } from './PhibroButton';
import { Subtitle } from './Boards/Subtitle';
import { Country } from './Boards/Countries';
import { ProductResponse } from '@/app/types';
import { motion } from 'framer-motion';

export function Product({ product }: { product: ProductResponse }) {

      const backUrl = product.prevProduct ? `/catalogo/${product.categoryId}/${product.prevProduct}` : undefined
      const nextUrl = product.nextProduct ? `/catalogo/${product.categoryId}/${product.nextProduct}` : undefined

      return (
            <>
                  <div className={"absolute top-40 left-20"}>
                        <PhibroButton title={"ANTICOCCIDIANOS Y ANTIBIÓTICOS"} variant={false} index={1} link={"catalogo/1"} chiquito></ PhibroButton>
                  </div>
                  <PhibroNavegation back={backUrl} nextStep={nextUrl} position />


                  {/* Contenido principal */}
                  <div className=" mt-32 flex flex-col items-center justify-center gap-32 min-h-screen ">

                        <div className='-mt-[350px] flex flex-col items-center  -mb-20'>
                              <ProductCard product={product} variant />
                              <motion.h2
                                    initial={{ opacity: 0, y: -20, }} // Mantener skewX aquí también
                                    animate={{ opacity: 1, y: 0, }} // También en animate
                                    transition={{ duration: 0.5, delay: 0.2 }} className='mt-5 text-3xl font-bold text-blue'>{product.type}</motion.h2>
                        </div>
                        <Subtitle title='Descripción' position='left' text={product.description} variant />

                        <Subtitle title='Composición' position='right' text={product.composition} />

                        <Country countries={product.countries} />

                  </div>
            </>
      )

}
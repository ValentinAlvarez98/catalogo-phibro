'use client';
import { ProductCard } from './Products/ProductCard';
import { PhibroNavegation } from './PhibroNavegation';
import { PhibroButton } from './PhibroButton';
import { Subtitle } from './Boards/Subtitle';
import { Country } from './Boards/Countries';
import { ProductResponse } from '@/app/types';
import { motion } from 'framer-motion';
import { Qr } from './Qr';

type categoryType = {
      [key: number]: string;
};

export function Product({ product }: { product: ProductResponse }) {

      const backUrl = product.prevProduct ? `/catalogo/${product.categoryId}/${product.prevProduct}` : undefined;
      const nextUrl = product.nextProduct ? `/catalogo/${product.categoryId}/${product.nextProduct}` : undefined;

      const category: categoryType = {
            1: "ANTICOCCIDIANOS Y ANTIBIÓTICOS",
            2: "ESPECIALIDADES NUTRICIONALES",
            3: "ADSORBENTES Y MINERALES",
            4: "VACUNAS"
      };


      return (

            <>
                  {product.categoryId && (

                        <div className="absolute top-48 left-20">

                              <PhibroButton
                                    title={category[Number(product.categoryId)]}
                                    variant={false}
                                    index={1}
                                    link={`/catalogo/${product.categoryId}`}
                                    chiquito
                              />

                        </div>

                  )}

                  <PhibroNavegation back={backUrl} nextStep={nextUrl} />

                  <div className="mt-40 flex flex-col items-center justify-center gap-12 min-h-screen">

                        <div className="-mt-[350px] flex flex-col items-center -mb-5">

                              <ProductCard product={product} variant />

                              {
                                    product.categoryId !== '4' &&
                                    <motion.h2
                                          initial={{ opacity: 0, y: -20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.5, delay: 0.2 }}
                                          className="mt-5 text-3xl font-bold text-blue"
                                    >

                                          {product.type}

                                    </motion.h2>
                              }

                        </div>

                        <Subtitle title="Descripción" position="left" text={product.description} variant />

                        <Subtitle title="Composición" position="right" text={product.composition} />

                        {product.presentation && <Subtitle title="Presentación" position="left" text={product.presentation} />}

                        <Country countries={product.countries} />

                        {product.qr && <Qr qr={product.qr} variant />}

                  </div>

            </>

      );

}

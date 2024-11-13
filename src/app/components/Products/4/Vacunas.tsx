'use client'

import { PhibroButton } from "@/app/components/PhibroButton"
import { PhibroNavegation } from "@/app/components/PhibroNavegation"
import { ProductsResponse } from "@/app/types"

import { motion } from "framer-motion"
import { ProductCard } from "../ProductCard"
export function Vacunas({ products }: { products: ProductsResponse[] }) {

      return (
            <>
            <PhibroNavegation back={"/catalogo/3"}  position={false} />
            <div className="relative flex flex-col items-center justify-center gap-20 min-h-screen">
                  <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
  className="-mt-40"
                        whileTap={{ scale: 0.90 }}
                  >
                        <PhibroButton title={"VACUNAS"} variant={false} index={4} link={"/catalogo/4"} />
                  </motion.div>

                  <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid  lg:grid-cols-2  gap-8 mt-8 px-8"
                  >
                        {products.map((product, index) => (
                              <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                    <ProductCard product={product} />
                              </motion.div>
                        ))}
                  </motion.div>
            </div>
            <motion.img
        src="/imgs/logo.png"
        alt="Phibro Logo"
        className="w-64 md:w-64 fixed bottom-[320px] right-[250px] ml-8 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      </>
      )

}
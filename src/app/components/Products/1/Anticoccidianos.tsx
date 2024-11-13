'use client'

import { PhibroButton } from "@/app/components/PhibroButton"
import { PhibroNavegation } from "@/app/components/PhibroNavegation"
import { ProductCard } from "../ProductCard"
import { ProductsResponse } from "@/app/types"
import { motion } from "framer-motion"



export function Anticoccidianos({ products }: { products: ProductsResponse[] }) {
      return (
            <>
                  <PhibroNavegation back={"/catalogo"} nextStep={"catalogo/2"} position={false} />

                  <div className="relative flex flex-col items-center justify-center gap-20 min-h-screen">
                        <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}

                              whileTap={{ scale: 0.90 }}
                        >
                              <PhibroButton title={"ANTICOCCIDIANOS Y ANTIBIÓTICOS"} variant={false} index={4} link={"/catalogo/1"} />
                        </motion.div>

                        <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 px-8"
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
            </>
      )
}
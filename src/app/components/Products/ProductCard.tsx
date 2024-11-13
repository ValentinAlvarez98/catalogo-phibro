import { motion } from 'framer-motion'
import { ProductsResponse } from '@/app/types'
import Link from 'next/link'


export function ProductCard({ product, variant }: { product: ProductsResponse, variant?: boolean }) {
      return (
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}

                  whileTap={{ scale: 0.95 }}
            >
                  <Link href={`/catalogo/1/${product.id}`} className={`border transform transition ${variant ? 'w-90' : 'w-52'} text-center h-auto shadow-2xl px-6 bg-white py-3 skew-x-12 block`}>
                        <div className="flex flex-col items-center">
                              <img
                                    src={product.logo}
                                    alt="logo"
                                    className="h-auto object-contain -skew-x-12"
                              />
                        </div>
                  </Link>
            </motion.div>
      );
}
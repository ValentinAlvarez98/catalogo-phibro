'use client';

import { motion } from 'framer-motion';
import { ProductsResponse } from '@/app/types';
import Link from 'next/link';
import Image from 'next/image';

export function ProductCard({ product, variant }: { product: ProductsResponse, variant?: boolean }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.8 }}
    >

      <Link href={`/catalogo/${product.categoryId}/${product.id}`} className={`border transform transition ${variant ? 'w-90' : product.categoryId === "3" || product.categoryId === "2" || product.categoryId === "4" ? 'w-72' : 'w-52'} text-center h-auto px-6 bg-white py-3 skew-x-12 block`}
        style={{
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.35)'
        }}>

        <div className="flex flex-col items-center">

          <Image
            src={product.logo}
            alt="logo"
            width={300}
            height={300}
            className="h-auto object-contain -skew-x-12"
            priority={true}
          />

        </div>

      </Link>

    </motion.div>

  );

}

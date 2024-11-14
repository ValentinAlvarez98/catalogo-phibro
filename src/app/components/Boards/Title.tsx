'use client';

import { motion } from 'framer-motion';

export type SubtitleProps = {
      title: string;
      marginBottom?: boolean;
}

export function Title({ title, marginBottom }: SubtitleProps) {

      return (

            <motion.div
                  initial={{ opacity: 0, x: -50, skewX: 12, zIndex: -10 }}
                  animate={{ opacity: 1, x: 0, skewX: 12, zIndex: -10 }}
                  transition={{ duration: 0.5 }}
                  className={`${marginBottom && "mb-20"} text-white -ml-5 font-bold bg-green py-12 bold px-20 shadow-xl w-fit relative`}
            >
                  <motion.h1
                        initial={{ opacity: 0, y: -20, skewX: -12, zIndex: -10 }}
                        animate={{ opacity: 1, y: 0, skewX: -12, zIndex: -10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className=' text-6xl ml-40'
                  >
                        {title}
                  </motion.h1>

            </motion.div>

      );

}

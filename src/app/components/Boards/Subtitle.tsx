'use client';

import { motion } from 'framer-motion';

export type SubtitleProps = {
      position: string;
      title: string;
      variant?: boolean;
      text?: string;
};

export function Subtitle({ position, title, variant, text }: SubtitleProps) {
      return (
            <motion.div
                  initial={{ opacity: 0, x: position === 'left' ? -50 : 50, zIndex: -10 }} // Agregamos skewX aquí
                  animate={{ opacity: 1, x: 0, zIndex: -10 }} // También en animate para mantener el skew
                  transition={{ duration: 0.5 }}
                  className={`${position === 'left' ? "place-self-start -ml-8 text-end pr-20" : "place-self-end -mr-28 text-left pl-20"} text-white font-bold w-[980px]  relative`}
            >
                  <motion.div
                        initial={{ opacity: 0, y: -20, skewX: -12, zIndex: -10 }} // Mantener skewX aquí también
                        animate={{ opacity: 1, y: 0, skewX: -12, zIndex: -10 }} // También en animate
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`${position === 'left' ? "pr-20" : "pl-20"} text-white font-bold bg-blue py-4 shadow-xl ${variant && 'w-[500px]'}`}
                  >
                        <h2 className='text-4xl skew-x-12'>{title}</h2>
                  </motion.div>

                  <motion.p
                        initial={{ opacity: 0, y: 20, skewX: 0, zIndex: -10 }} // Igual para el párrafo
                        animate={{ opacity: 1, y: 0, skewX: 0, zIndex: -10 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`${position !== 'left' ? "pl-10 pr-40" : "px-20 text-start pl-40"} leading-[35px] mt-4 text-3xl text-blue`}
                  >
                        {text}
                  </motion.p>
            </motion.div>
      );
}

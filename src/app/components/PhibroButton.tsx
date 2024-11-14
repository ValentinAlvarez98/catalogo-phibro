// TODO: CAMBIAR EL URL DEL LINK EN PRODUCCIÓN
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export type PhibroButtonProps = {
      title: string;
      variant?: boolean;
      index?: number;
      link?: string;
      chiquito?: boolean;
}

export function PhibroButton({ title, variant, index, link, chiquito }: PhibroButtonProps) {

      const buttonVariants = {
            hiddenLeft: { opacity: 0, x: "-100vw" },
            hiddenRight: { opacity: 0, x: "100vw" },
            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
      };

      const initialVariant = index && index % 2 === 0 ? "hiddenRight" : "hiddenLeft";

      const clickAnimation = {
            scale: 0.95,
            transition: { duration: 0.1 },
      };

      const buttonSize = chiquito ? 'w-[320px] py-3 px-5 text-3xl' : 'w-[500px] py-9 text-4xl';

      return (

            <Link href={`http://localhost:3000/${link}`}>

                  <motion.div
                        className="relative inline-block"
                        variants={buttonVariants}
                        initial={initialVariant}
                        animate="visible"
                        whileTap={clickAnimation}
                  >


                        <div className={`absolute top-0 left-0 w-full h-full translate-x-4 translate-y-3 border-4 ${variant ? "border-blue" : "border-green"} skew-x-12`} />


                        <motion.button
                              className={`relative z-10 inline-flex items-center justify-center ${buttonSize} font-bold text-white ${variant ? "bg-green" : "bg-blue"} transform skew-x-12`}
                        >

                              <motion.span
                                    className="flex items-center transform -skew-x-12"
                                    initial={false}
                              >

                                    {title}

                              </motion.span>

                        </motion.button>

                  </motion.div>

            </Link>

      )

}

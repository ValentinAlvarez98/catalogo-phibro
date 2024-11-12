'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export type PhibroButtonProps = {
      title: string;
      primaryColor: string;
      secondColor: string;
      index: number;  // Este índice nos ayudará a alternar las animaciones
      link: string;
}

export function PhibroButton({ title, primaryColor, secondColor, index, link }: PhibroButtonProps) {

      // Animaciones de entrada, alternando entre derecha e izquierda
      const buttonVariants = {
            hiddenLeft: { opacity: 0, x: "-100vw" },  // Botón entra desde la izquierda
            hiddenRight: { opacity: 0, x: "100vw" },  // Botón entra desde la derecha
            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }  // Aparece con resorte
      };

      // Elegir animación basada en el índice (par = derecha, impar = izquierda)
      const initialVariant = index % 2 === 0 ? "hiddenRight" : "hiddenLeft";

      // Animación de click (pequeño escalado al hacer click)
      const clickAnimation = {
            scale: 0.95, // El botón se achica un poco
            transition: { duration: 0.1 },
      };

      return (
            <Link href={`/${link}`}>
                  <motion.div
                        className="relative inline-block"
                        variants={buttonVariants}
                        initial={initialVariant}  // Determinamos si viene de la izquierda o la derecha
                        animate="visible"
                        whileTap={clickAnimation}  // Animación de click
                  >
                        {/* Capa detrás del botón que simula el borde */}
                        <div
                              className={`absolute top-0 left-0 w-full h-full translate-x-4 translate-y-3 border-4 border-${secondColor} skew-x-12`}
                        ></div>

                        {/* El botón real */}
                        <motion.button
                              className={`relative z-10 inline-flex items-center justify-center w-[500px] py-9 text-4xl font-bold text-white bg-${primaryColor} transform skew-x-12`}
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

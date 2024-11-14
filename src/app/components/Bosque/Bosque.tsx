'use client';

import { PhibroNavegation } from "../PhibroNavegation";
import { Title } from "../Boards/Title";
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Bosque() {

  const textVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (

    <div className="mt-[350px]">

      <PhibroNavegation nextStep={"bosque/2"} />

      <Title title={"AMIGO DEL BOSQUE"} marginBottom />

      <div className="container mx-auto flex flex-col gap-6 px-40 mt-20 text-[29px] text-blue">


        <motion.p
          initial="hiddenLeft"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >

          Una iniciativa especial promovida por <strong>Phibro</strong> para
          <strong> OVUM 2024</strong>, que acerca al público una experiencia
          innovadora y sostenible.

        </motion.p>

        <motion.p
          initial="hiddenRight"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          Participando en nuestro juego interactivo
          y encontrando todos los productos correspondientes,
          tendrás la oportunidad de recoger el peluche
          y de contribuir a plantar un árbol.

        </motion.p>

        <div className="-mr-[240px] w-[800px] h-[270px] place-self-end -skew-x-12 shadow-2xl">

          <Image
            src="/imgs/bosqueFondo.jpg"
            alt="Bosque"
            fill={true}
            objectFit="cover"
            className="z-0"
          />

        </div>

        <motion.p
          initial="hiddenLeft"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >

          La plantación correrá a cargo del programa
          <strong> Amigo del Bosque</strong> de la ONG Iniciativa Verde,
          dedicada a la reforestación y la preservación
          del medio ambiente.

        </motion.p>


        <motion.p
          initial="hiddenRight"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >

          <strong>Phibro</strong> ha donado árboles para esta acción,
          compensando el impacto medioambiental
          del evento y reforzando su compromiso con
          la sostenibilidad y el medio ambiente.

        </motion.p>


        <motion.p
          initial="hiddenLeft"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >

          ¡Únete a nosotros y forma parte de esta
          acción que reúne diversión, aprendizaje
          y responsabilidad medioambiental!

        </motion.p>

      </div>

    </div>

  );

}

'use client';

import { useEffect, useState } from "react";
import { PhibroNavegation } from "../../PhibroNavegation";
import { Title } from "../../Boards/Title";
import { motion } from "framer-motion";
import Image from "next/image";


export function Bosque2() {

      const [plantStage, setPlantStage] = useState(0);
      const [hasPlanted, setHasPlanted] = useState(false);

      const plantImages = [
            '/imgs/planta/basePlanta.png',
            '/imgs/planta/planta1.png',
            '/imgs/planta/planta2.png',
            '/imgs/planta/planta3.png'
      ];

      const buttonTexts = [
            'Haz clic en el suelo y ¡ven a plantar con nosotros!',
            'Haz clic una vez más para que el árbol siga creciendo.',
            '¡Ya falta poco! Haz clic una vez más y verás crecer tu árbol.',
            'Tu árbol será plantado por la ONG Iniciativa Verde.'
      ];

      const plantSize = [500, 550, 600, 640][plantStage];


      const incrementTreeCounter = () => {

            const currentCount = localStorage.getItem('treeCounter');

            const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;

            localStorage.setItem('treeCounter', newCount.toString());

      };


      useEffect(() => {

            const plantedBefore = localStorage.getItem('hasPlanted');

            if (plantedBefore) {

                  setHasPlanted(true);

            }

      }, []);


      const handleClick = () => {

            setPlantStage((prevStage) => {

                  const newStage = Math.min(prevStage + 1, plantImages.length - 1);


                  if (newStage === 3 && !hasPlanted) {

                        incrementTreeCounter();

                        localStorage.setItem('hasPlanted', 'true');

                        setHasPlanted(true);

                  }

                  return newStage;

            });

      };

      return (

            <div className="mt-[350px]">

                  <PhibroNavegation back={"bosque"} />

                  <Title title={"AMIGO DEL BOSQUE"} marginBottom />

                  <div className="container mx-auto flex flex-col gap-6 px-40 text-[29px] text-blue">

                        <motion.h2
                              className="w-[600px] text-6xl font-bold mb-12"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              key={plantStage}
                              transition={{ duration: 0.5 }}
                        >

                              {plantStage !== 3
                                    ? "Cultivando un futuro más verde, ¡hoy!"
                                    : "¡Ya eres Amigo del Bosque!"}

                        </motion.h2>

                        <div className="w-[450px] place-self-end -mr-20">

                              <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    key={plantStage}
                                    transition={{ duration: 0.5 }}
                                    className="w-full text-start flex"
                                    disabled={plantStage === plantImages.length - 1}
                              >

                                    {plantStage < plantImages.length - 1 && (
                                          <Image
                                                src="/imgs/hand.jpg"
                                                alt="Mano señalando"
                                                width={60}
                                                height={60}
                                                objectFit="cover"
                                                className="animate-bounce pt-2 z-0 mr-4"
                                          />
                                    )}

                                    <span>{buttonTexts[plantStage]}</span>

                              </motion.button>

                              <motion.div
                                    initial={{ opacity: 0, y: -20, skewX: -12, zIndex: -10 }}
                                    animate={{ opacity: 1, y: 0, skewX: -12, zIndex: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute mt-5 h-4 w-full bg-blue"
                              />

                              {plantStage === plantImages.length - 1 && (
                                    <p className="mt-14">Monitore en la web utilizando el Código QR</p>
                              )}

                        </div>

                  </div>

                  <div
                        onClick={handleClick}
                        className="absolute bottom-[350px] left-0 h-auto z-10 cursor-pointer"
                  >

                        <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              key={plantStage}
                              transition={{ duration: 0.5 }}
                        >

                              <Image
                                    src={plantImages[plantStage]}
                                    alt={`Planta en etapa ${plantStage + 1}`}
                                    width={plantSize}
                                    height={plantSize}
                                    objectFit="cover"
                                    className="z-0"
                              />

                        </motion.div>

                  </div>

                  {plantStage === 3 && (

                        <motion.div initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="absolute bottom-[400px] right-[250px] h-auto z-10">

                              <Image
                                    src="/imgs/qrs/qrBosque.jpg"
                                    alt="Qr"
                                    width={280}
                                    height={280}
                                    objectFit="cover"
                                    className="z-0"
                              />

                        </motion.div>

                  )}

            </div>

      );

}
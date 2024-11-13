'use client'

import { motion } from 'framer-motion'
import { CircleFlag } from 'react-circle-flags'

export function Country({ countries }: { countries: { flag: string }[] }) {
  // Example country codes (replace with actual data from countrys prop)
  const exampleCountryCodes = ['us', 'ca', 'mx', 'br', 'ar', 'es', 'fr', 'de']

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="place-self-end -mr-28 text-left text-white font-bold -z-10 w-[750px]  "
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pr-20 text-blue font-bold py-4 shadow-xl  border-2 border-green  pl-20 "
      >
        <h2 className='text-4xl'>Disponible en:</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className=" grid grid-cols-4 grid-rows-2 w-[400px] p-5 gap-5"
      >
        {exampleCountryCodes.map((code, index) => (
          <motion.div
            key={code}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="flex justify-center items-center "
          >
            <div
              className="rounded-full"
              style={{
                boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.6)'
              }}
            >
              <CircleFlag
                countryCode={code}
                width={80}
                height={80}
                aria-label={`Flag of ${code.toUpperCase()}`}
              />
            </div>

          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
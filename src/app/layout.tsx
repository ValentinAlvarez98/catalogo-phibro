'use client'

import { AnimatePresence } from 'framer-motion'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (

    <html lang="es">

      <body>

        <div className="relative min-h-screen overflow-hidden">

          <div id="fondo" className="absolute inset-0 -z-10"></div>

          <div id="hojas" className="absolute inset-0 z-0"></div>

          <AnimatePresence mode="wait">

            {children}

          </AnimatePresence>

        </div>

      </body>

    </html>

  )

}

'use client'

import { UserProvider } from './context/UserContext'
import { AnimatePresence } from 'framer-motion'
/* import CurtainTransition from './components/CurtainTransition' */
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <div id='fondo' className="absolute inset-0 -z-10">
          </div>
          <div id='hojas' className="absolute inset-0 z-0">
          </div>
          <UserProvider>
            <AnimatePresence mode="wait">
              {/* <CurtainTransition> */}
              {children}
              {/* </CurtainTransition> */}
            </AnimatePresence>
          </UserProvider>
        </div>
      </body>
    </html>
  )
}
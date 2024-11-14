// layout.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}

      {/* Logo en la esquina inferior izquierda */}
      <motion.img
        src="/imgs/logo.png"
        alt="Phibro Logo"
        className="w-80 md:w-80 fixed bottom-40 right-32 ml-8 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Div verde inclinado */}
      <div className="-z-10 bg-green w-[85%] py-2 -skew-x-12 shadow-xl fixed bottom-36 left-0"></div>
    </>
  );
}
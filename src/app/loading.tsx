// app/loading.tsx
'use client'

import { Oval } from 'react-loader-spinner';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-transparent flex-col">
      {/* Spinner Oval */}
      <Oval
        height={150}    // Tamaño grande
        width={150}     // Tamaño grande
        color="#76b938" // Azul
        secondaryColor="#d1d5db" // Gris claro para el color secundario
        strokeWidth={8} // Grosor del borde
        strokeWidthSecondary={8} // Grosor del borde secundario
        ariaLabel="loading"
      />
      
      {/* Texto animado */}
      <div className="mt-4 text-5xl text-blue font-bold">
        Cargando{dots}
      </div>
    </div>
  );
}

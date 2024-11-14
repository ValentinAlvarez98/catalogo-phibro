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


      <Oval
        height={150}
        width={150}
        color="#76b938"
        secondaryColor="#d1d5db"
        strokeWidth={8}
        strokeWidthSecondary={8}
        ariaLabel="loading"
      />

      <div className="mt-4 text-5xl text-blue font-bold">

        Cargando{dots}

      </div>

    </div>

  );

}

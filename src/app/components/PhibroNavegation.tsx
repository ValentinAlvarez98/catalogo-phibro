// TODO: CAMBIAR EL URL DEL LINK EN PRODUCCIÓN
'use client'

import Link from 'next/link'
import { ChevronsLeft, ChevronsRight, SquareMenu } from 'lucide-react';

export type PhibroButtonProps = {
  back?: string;
  nextStep?: string;
}

export function PhibroNavegation({ back, nextStep }: PhibroButtonProps) {

  return (

    <div className={`-mr-60 w-[60%] flex gap-2 bg-blue py-4 pl-20 skew-x-12 absolute z-20 top-48 text-black right-0`}>

      {back && (

        <Link href={`https://catalogo-phibro.vercel.app/${back}`}>

          <ChevronsLeft size={64} color='white' strokeWidth={3} className='z-20 -skew-x-12' />

        </Link>

      )}

      <Link href={`https://catalogo-phibro.vercel.app/`} >

        <SquareMenu size={64} color='white' strokeWidth={2} className=' z-20 -skew-x-12' />

      </Link>

      {nextStep &&
        <Link href={`https://catalogo-phibro.vercel.app/${nextStep}`}>

          <ChevronsRight size={64} color='white' strokeWidth={3} className='z-20 -skew-x-12' />

        </Link>}

    </div>

  )

}

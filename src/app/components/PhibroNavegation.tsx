'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronsLeft, ChevronsRight, SquareMenu } from 'lucide-react';

export type PhibroButtonProps = {
  back?: string;
  nextStep?: string;
  position?: boolean;
}



export function PhibroNavegation({ back, nextStep, position }: PhibroButtonProps) {
  return (
    <div className={`-mr-60 w-[60%] flex gap-2 bg-blue py-4 pl-20 skew-x-12 absolute z-20 top-48 text-black right-0`}>
      
      {back && (
        <Link href={`http://localhost:3000/${back}`}>
          <ChevronsLeft size={64} color='white' strokeWidth={3} className='z-20 -skew-x-12' />
        </Link>
      )}
      
      <Link href={`http://localhost:3000/`} >
        <SquareMenu size={64} color='white' strokeWidth={2} className=' z-20 -skew-x-12' />
      </Link>

      {nextStep &&  
      <Link href={`http://localhost:3000/${nextStep}`}>
        <ChevronsRight size={64} color='white' strokeWidth={3} className='z-20 -skew-x-12' />
      </Link>}

    </div>
  )
}

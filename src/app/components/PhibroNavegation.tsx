'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronsLeft, ChevronsRight, Menu } from 'lucide-react';
export type PhibroButtonProps = {
      back: string;
      position: boolean;

}

const positionStyle = {
      top = ""
      center = ""
}

export function PhibroNavegation({ back, position }: PhibroButtonProps) {



      return (
            <div className={`bg-blue absolute ${position ? positionStyle.top : positionStyle.center} text-black`}>
                  <p>hola</p>
                  <ChevronsLeft />
                  <Menu />
                  <ChevronsRight />
            </div>

      )
}

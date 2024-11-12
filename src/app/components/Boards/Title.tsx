'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'



export type SubtitleProps = {

    
      title: string;
      marginBottom?: boolean;

}

export function Title({ title,marginBottom} : SubtitleProps) {



    
    
      return (
        <div className={`${marginBottom && "mb-20"} -z-10 text-white -ml-5 font-bold bg-green py-12 bold px-20 z-10 skew-x-12 shadow-xl  w-fit  `}>
        <h1 className='-skew-x-12 text-6xl ml-40'>{title}</h1>
      </div>
      )
}

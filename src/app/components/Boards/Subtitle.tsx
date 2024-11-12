'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'



export type SubtitleProps = {

      position: string
      title: string;
      variant?: string;
      text?: string;

}

export function Subtitle({ position,title,variant,text } : SubtitleProps) {



    
    
      return (
        <div className={`${position === 'left' ? "place-self-start -ml-8 text-end pr-20" : "place-self-end -mr-28 text-left pl-20 "} text-white font-bold   -z-10 w-[980px] top-40 skew-x-12 `}>
          <div className={` ${position === 'left' ? " pr-20" : "  pl-20 "}   text-white font-bold bg-blue  py-4 shadow-xl ${variant && 'w-[500px]' }  `}>
            <h2 className='-skew-x-12 text-4xl '>{title}</h2>
        </div>
     
                  <p className={` ${position !== 'left' ? " pl-10 pr-40 " : " px-20 text-start pl-40"} leading-[45px] mt-14 -skew-x-12 text-3xl text-blue`}>{text}</p>
                
                  </div>
      )
}

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center
        rounded-full font-bold text-2xl border border-solid border-transparent dark:border-light'
        whileHover={{
          backgroundColor:["#121212", "rgb(60, 60, 60)","rgb(90, 90, 90)","rgb(120, 120, 120)","rgb(180, 180, 180)","rgb(210, 210, 210)", "rgb(240, 240, 240)", "#121212"],
          transition:{duration:1, repeat:Infinity}
        }}
        >H</MotionLink>
    </div>
  )
}

export default Logo
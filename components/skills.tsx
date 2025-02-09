"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from "motion/react";
import { animate, delay } from 'motion'


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number)=> ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

export default function Skills() {

    const { ref } = useSectionInView("Skills")



  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center
         gap-2 text-lg text-gray-800'>
            {skillsData.map((skill,index)=> 
            (<motion.li className='border border-black/[0.1] py-3
                                   px-5 rad rounded-xl bg-white'
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,

            }}
            custom={index}

            >{skill}</motion.li>))}

        </ul>
    </section>
  )
}

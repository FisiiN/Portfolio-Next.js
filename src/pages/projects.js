import Animated  from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/QRcode-generator.png'
import project2 from '../../public/images/projects/github-api.png'
import project3 from '../../public/images/projects/3D-city.jpg'
import TransitionEffect from '@/components/TransitionEffect'
import {motion} from "framer-motion"

const FramerImage = motion(Image)

const Project = ({title, type, img, link, github}) =>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl md:right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='font-medium text-lg lg:!text-lg md:!text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-primaryDark lg:!text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'className='text-lg font-semibold hover:underline md:!text-base'>Visit Projects</Link>
                <Link href={github} target='_blank' className="w-8 md:w-6"> <GithubIcon /></Link>
                    
                </div>
            </div>
        </article>
    )
}


const Projects = () => {
  return (
    <>
         <Head>
            <title>{`FisiiN'z | Projects Page`}</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <Animated text="Libraries !"
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
               
                <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>

                    <div className='col-span-6 sm:col-span-12'>
                        < Project
                            title="QR-Code Generator"
                            img={project1}
                            link='https://github.com/FisiiN/QRCode-Generator/tree/main/QR-Code-Generator'
                            github='https://github.com/FisiiN/QRCode-Generator/tree/main/QR-Code-Generator'
                            type='Projects' /> 
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        < Project
                            title="Users-Search Github API"
                            img={project2}
                            link='https://github.com/FisiiN/Searching-Github-Users'
                            github='https://github.com/FisiiN/Searching-Github-Users'
                            type='Projects' />
                    </div>

                    <div className='col-span-12 sm:col-span-12'>
                        < Project
                            title="3D-City Three.js"
                            img={project3}
                            link='https://github.com/FisiiN/3D-With-Three.js/tree/main/3D-City'
                            github='https://github.com/FisiiN/3D-With-Three.js/tree/main/3D-City'
                            type='Projects' />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects
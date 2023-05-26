import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-4 sm:text-center'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        </Layout>
    </footer>
  )
}

export default Footer
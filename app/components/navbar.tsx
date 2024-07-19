"use client"
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { Playfair_Display} from "next/font/google";
const playfair_Display = Playfair_Display({weight:['400','500','600'], preload:false, subsets:['latin']});
import { useSession } from 'next-auth/react';
const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <nav className='h-20 flex ml-44 mr-24 items-center justify-between'>
      <a className='text-4xl font-thin'> <h1 className={playfair_Display.className}> Personalizer </h1></a>
      <div className='flex items-center  list'>
        <Link href="https://github.com/saikarthik04/personalizer" className='pr-8'>
        <FaGithub className='text-2xl bg-black opacity-80 hover:opacity-100'/>
        </Link>
        {status === 'authenticated' && session ? (
          <></>
        ):(
          <Link href="/login" className='font-medium'>login</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
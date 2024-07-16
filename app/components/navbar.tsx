import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { Playfair_Display} from "next/font/google";
const playfair_Display = Playfair_Display({weight:['400','500','600'], preload:false, subsets:['latin']});
const Navbar = () => {
  return (
    <nav className='h-20 flex items-center justify-between border-b-2 border-white'>
      <a className='text-4xl font-thin'> <h1 className={playfair_Display.className}> PERSONALIZER </h1></a>
      <div className='flex items-center list'>
        <Link href="https://github.com/saikarthik04/personalizer" className='pr-8'>
        <FaGithub className='text-2xl bg-black opacity-80 hover:opacity-100'/>
        </Link>
        <Link href="/login" className='font-medium'>login</Link>
      </div>
    </nav>
  )
}

export default Navbar
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='h-20 flex items-center justify-between'>
      <a className='text-4xl font-medium'> Personalizer</a>
      <div className='flex items-center'>
        <Link href="https://github.com/saikarthik04/personalizer" className='pr-8'>
        <FaGithub className='text-2xl bg-black opacity-80 hover:opacity-100'/>
        </Link>
        <Link href="/login">login</Link>
      </div>
    </nav>
  )
}

export default Navbar
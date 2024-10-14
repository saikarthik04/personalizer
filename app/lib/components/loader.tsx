import Image from 'next/image';
import React from 'react'
// const dm_Serif_Display = DM_Serif_Display({
//   weight: ["400"],
//   preload: false,
// });
const Loader = () => {
  return (
    // <div className='md:text-8xl text-4xl font-semibold capitalize tracking-widest 
    //   bg-gradient-to-br flex justify-center align-middle items-center text-center h-screen md:font-bold loaderBg text-emerald-950'> <span className={dm_Serif_Display.className}>personalizer</span></div>

      <div className='flex justify-center align-middle items-center text-center h-screen bg-black'>
        <Image src="/icons/personalizer-brand.svg" alt='brand-loader' width={120} height={120}></Image>
      </div>
  )
}

export default Loader


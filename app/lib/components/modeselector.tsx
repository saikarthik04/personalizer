import { categoryItems } from '@/app/constants';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const Modeselector = () => {
  const { data: session } = useSession();
  // const [showCategoryModal, setCategoryModal] = useState(false);

  // useEffect(() => {
  //     if (session && !showCategoryModal) {
  //       setCategoryModal(true);
  //     }
  // }, [session]);

  // const handleCategorySelection = () => {
  //   setCategoryModal(false);
  //     window.location.href = '/home';
  // };
  return (
    <div className='h-screen flex justify-center align-middle flex-col items-center'>
      <div className='grid grid-cols-2 md:grid-cols-3 bg-transparent lg:grid-cols-4 gap-8 mb-10'>
      <CategoriesItems/>
      </div>
        {/* <button  className="text-white flex flex-row gap-3 hover:text-neutral-300">
              next <FaArrowRightLong  className='mt-1'/></button> */}
    </div>
  )
}

 const CategoriesItems =() =>{
  return(
    <>
    {categoryItems.map((i)=>(
      <>
      <motion.button className="bg-white bg-opacity-35 p-5 align-middle flex items-center flex-col isolate aspect-square rounded-xl bg-white/20 hover:scale-105" whileHover={{ scale: 1.2 }} key={i.categoryId}>
    {/* <button className="bg-white bg-opacity-35 p-5 align-middle flex items-center flex-col isolate aspect-square rounded-xl bg-white/20 hover:scale-105" key={i.categoryId}> */}
     <i.icon className={`${i.iconColor} mb-5 size-10 `} />
      <h1 className='tracking-wide font-sans'>{i.categoryName}</h1>
    {/* </button> */}
    </motion.button> 
    </>
    ))}
    </>
  )
}

export default Modeselector
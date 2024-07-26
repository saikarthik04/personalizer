import React from 'react'
import Navbar from './navbar'
import { Playfair_Display} from "next/font/google";
import Footer from './footer';
const playfair_Display = Playfair_Display({weight:['400','500','600'], preload:false, subsets:['latin']});

const Landingpage = () => {
  return (
    <main className="px-48 border-b-2 border-white border-solid">
      <Navbar />
      <section className="h-screen my-32 text-wrap text-justify leading-loose text-5xl line">
        <p>Customize your youTube recommendations with
        <span className="tracking-tight lg:text-9xl md:text-5xl inline font-semibold bg-clip-text text-transparent 
      bg-gradient-to-b from-gradient-from-position to-gradient-to-position"><span className={playfair_Display.className}> personalizer </span> </span>to your preferences
      </p>
      </section>
      <section className="h-screen">
        <div className="col-auto h-2/4 grid grid-cols-2 gap-4">
        {/* <Image src="https://m.media-amazon.com/images/I/A1UVi1LxwcL.png" width={20} height={20} className="rounded-3xl" alt="youtube-home  " />
        <Image src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/2400x1600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986637/acastro_STK092_01.jpg" className="rounded-3xl" alt="youtube-home  " /> */}
        </div>
      </section>
      {/* <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500 p-4 col-span-2">1 (span 2 columns)</div>
        <div className="bg-green-500 p-4">2</div>
        <div className="bg-blue-500 p-4 row-span-2">3 (span 2 rows)</div>
        <div className="bg-yellow-500 p-4">4</div>
        <div className="bg-pink-500 p-4">5</div>
        <div className="bg-purple-500 p-4">6</div>
      </div> */}
      <Footer/>
    </main>
  )
}

export default Landingpage
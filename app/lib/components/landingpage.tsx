import React from 'react'
import { Playfair_Display} from "next/font/google";
const playfair_Display = Playfair_Display({weight:['400','500','600'], preload:false, subsets:['latin']});

const Landingpage = () => {
  return (
    <main className="lg:px-48 ">
      <section className="h-screen md:my-30 lg:my-34 my-20 text-balance leading-loose md:text-5xl text-xl px-10 grid justify-center items-center line">
        <p>Customize your youTube recommendations with
        <span className="tracking-tight lg:text-9xl md:text-5xl text-4xl inline font-semibold bg-clip-text text-transparent 
      bg-gradient-to-b from-gradient-from-position to-gradient-to-position"><span className={playfair_Display.className}> personalizer </span> </span>to your preferences
      </p>
      </section>
    </main>
  )
}

export default Landingpage
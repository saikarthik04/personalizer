"use client"
import { signIn, signOut } from 'next-auth/react'
import { PiSignOutBold } from "react-icons/pi";
import { FcGoogle } from 'react-icons/fc';
export const SigninButton = () => {
  return (
    <>
     <button
                type="button"
                className="w-full bg-white focus:ring-2 hover:bg-black text-black hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex flex-row justify-center gap-5"
                onClick={() => signIn("google", {callbackUrl:'/',redirect:true})}
              >
                {/* <Image
                  src="/icons/google-logo.svg"
                  alt="Google Icon" width={20} height={20}
                  className="absolute md:left-20 sm:left-16"
                />{"Sign In with Google"} */}
                <FcGoogle className='mt-0.5' /> {"Sign In with Google"}
              </button>
    </>
  )
}

export const SignOutButton = () => {
  console.log("signout")
  return (
    <>
    <PiSignOutBold className='h-5 w-5'/>
    <button className='text-sm' onClick={() => signOut()}>Sign out</button>
    </>
  )
}



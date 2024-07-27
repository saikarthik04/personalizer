"use client"
import React from 'react'
import Image from 'next/image'
import { signIn, signOut } from 'next-auth/react'
export const SigninButton = () => {
  return (
    <>
     <button
                type="button"
                className="w-full bg-white focus:ring-2 hover:bg-black text-black hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center relative "
                onClick={() => signIn("google", {callbackUrl:'/home',redirect:true,})}
              >
                <Image
                  src="/icons/google-logo.svg"
                  alt="Google Icon" width={20} height={20}
                  className="absolute left-20"
                />{"Sign In with Google"}
              </button>
    </>
  )
}

export const SignOutButton = () => {
  return (
    <>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}



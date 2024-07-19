"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
export default function Login() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="flex items-center mb-6 text-2xl font-semibold text-slate-200">
            Personalizer
          </p>
          <div className="w-full  bg-white bg-opacity-10 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
              <button
                type="button"
                className="w-full bg-white focus:ring-2 hover:bg-black text-black hover:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center relative "
                onClick={() => signIn("google", {callbackUrl:'/home'})}
              >
                <Image
                  src="/icons/google-logo.svg"
                  alt="Google Icon" width={20} height={20}
                  className="absolute left-20"
                />{"Sign In with Google"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

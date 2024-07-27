"use client"
import { SigninButton } from "@/app/lib/components/buttons";
import {  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const { update,data:session, status } = useSession();
  const router = useRouter()
  console.log(update,session?.user?.name, status,"login")
 
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/home'); // Redirect to home page or any other page
    }
  }, [session, status, router]);
  if(status === "loading"){
    return(<><h1 className="text-center flex justify-center items-center text-amber-300">loading...</h1></>)
  }
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
             <SigninButton/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
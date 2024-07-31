"use client"
import { SigninButton } from "@/app/lib/components/buttons";
import {  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../lib/components/loader";

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
    return <Loader/>;
  }
  return (
    <>
      <section>
        <div className=" h-screen flex flex-col items-center justify-center md:px-6 md:py-8 px-12 md:mx-auto md:h-screen lg:py-0">
          <p className="md:flex items-center mb-6 text-2xl font-semibold text-slate-200 hidden">
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
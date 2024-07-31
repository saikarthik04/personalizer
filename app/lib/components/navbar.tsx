"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Playfair_Display } from "next/font/google";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
const playfair_Display = Playfair_Display({
  weight: ["400", "500", "600"],
  preload: false,
  subsets: ["latin"],
});
import { SignOutButton } from "./buttons";
import { useSession } from "next-auth/react";
import Image from "next/image";
// let clickHamburger : boolean =false
// let menuItems=[];
// const handleHamBuger = (event:any) => {
//   clickHamburger = true
//    menuItems=[
//     {id:"0", item_name:"login"},
//     {id:"1", item_name:"github"}
//   ]
// }
interface NavbarProps {
  toggleSidebar?: () => void;
}

const Navbar = ({toggleSidebar}:NavbarProps) => {
  const sessionData = useSession();
  console.log(sessionData, "nav");
  return (
    <>
    <nav className=" border-b-2 border-white z-10 border-solid navbar-sticky">
      <div className="h-20 flex md:ml-44 md:mr-40 mx-10 items-center md:justify-between text-center justify-center">
        <a className="md:text-4xl font-thin text-3xl" href="/">
          <h1 className={playfair_Display.className}>Personalizer</h1>
        </a>
         <li className="md:hidden absolute right-6 items-center list-none ">
         {sessionData.data?.user ?  
         <>
        {/* <Image
          src={sessionData.data?.user?.image}
          alt={sessionData.data?.user.name}
          fill
          onClick={toggleSidebar}
          className="h-10 w-16 rounded-full flex md:hidden"
        ></Image> */}
        <RxHamburgerMenu className="w-6 h-6 mt-2 justify-center items-center md:hidden" onClick={toggleSidebar}></RxHamburgerMenu></>
        : (<Link href="/login"><FaRegCircleUser className="h-11 w-9"/></Link>)}
        </li> 
        <div className="md:flex md:items-center  md:list hidden">
          <Link
            href="https://github.com/saikarthik04/personalizer"
            className="pr-8"
          >
            <FaGithub className="text-3xl bg-black opacity-80 hover:opacity-100" />
          </Link>
          {sessionData.status == "authenticated" &&
          sessionData.data.user != null ? (
            <Image
                  src={sessionData.data?.user?.image}
                  alt={sessionData.data?.user.name}
                  width={30}
                  height={30}
                  className=" rounded-full flex"
                ></Image>
          ) : (
            <Link href="/login" className="font-medium">
              login
            </Link>
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar
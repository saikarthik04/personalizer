"use client"
import React, { useState } from "react";
import styles from './sidebar.module.css';
import { MdPlaylistPlay } from "react-icons/md";
import { useSession } from "next-auth/react";
import Image from 'next/image'
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import Settings from "./settings";
import { SignOutButton } from "./buttons";
interface SidebarProps {
  isMiniSidebarVisible: boolean;
}

const Slidebar= ({ isMiniSidebarVisible }:SidebarProps) => {
  const [showSetting, setSetting] = useState(false);
  const sessionData = useSession();
  return (
    <>
     <div className={`${styles.sidebar} ${isMiniSidebarVisible  ? styles.visible: styles.silder} `}>
      <section  className="lg:flex md:flex-col md:items-center md:w-40 h-sildebar  md:text-gray-400 md:rounded sticky sidebar-sticky m_view_slidebar">
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-gray-900">
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Dasboard</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <MdPlaylistPlay className="h-6 w-6"/>
              <span className="ml-2 text-sm font-medium">Playlists</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Docs</span>
            </a>
          </div>
          <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Products</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Settings</span>
            </a>
            <a
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Messages</span>
              <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
            </a>
          </div>
        </div>
        <a
          className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
         {sessionData.status == "authenticated" &&
            sessionData.data.user != null ? (
              <>
                <Image 
                  src={sessionData.data?.user?.image}
                  alt={sessionData.data?.user.name}
                  width={30}
                  height={30}
                  className=" rounded-full block md:hidden"
                  onClick={() => setSetting(!showSetting)}
                ></Image>
              </>
            ) : (
              <Link href="/login" className="md:hidden block">
                <FaRegCircleUser className="h-11 w-9" />
              </Link>
            )} 
        </a>
        {showSetting ? (
          <>
        <Settings
          data={sessionData.data}
          status={sessionData.status}
          update={sessionData.update}
        />
        <a
          className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
          href="#"
        > <SignOutButton ></SignOutButton>
</a>
         </>
      ) : (
        ""
      )}
        </section>
        </div>
        </>
  )
}
export default Slidebar;

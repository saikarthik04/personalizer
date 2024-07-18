"use client"
import { useSession } from "next-auth/react"
import React from 'react'
import Landingpage from "./components/landingpage";
export function main() {
  const { data: session, status } = useSession()
  if (status === "authenticated" && session.user) {
  }
  if(!session){
    return <Landingpage/>
  }
}
export default main
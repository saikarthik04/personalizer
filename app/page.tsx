"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Landingpage from "./components/landingpage";

const Main: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>; 
  }

  if (status === "authenticated" && session?.user) {
    return (
      <div>
        <h1>Welcome, {session.user.name}</h1>
      </div>
    );
  }
  return <Landingpage />;
};

export default Main;

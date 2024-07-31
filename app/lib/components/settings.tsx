import { Session } from "next-auth";
import React from "react";
import Image from "next/image";
import { PiSignOutBold } from "react-icons/pi";
type UpdateSession = (data?: any) => Promise<Session | null>;
interface UserSession {
  data: any;
  update:UpdateSession
  status: "authenticated" | "unauthenticated" | "loading";
}
const Settings = ({ data, status, update }: UserSession) => {
  return (
    <div className=" w-72 settings_popup fixed rounded-md z-10 right-8 top-24">
      <div className="h-20 border_bottom flex flex-row justify-center items-center gap-4">
        <div className="w-12 h-12 relative ">
          <Image
            src={data?.user?.image}
            alt={data?.user.name}
            fill
            className=" rounded-full flex"
          ></Image>
        </div>
        <p className="text-base">{data?.user.name}</p>
      </div>
      <div className="flex flex-col gap-5  justify-center py-5  hover:bg-zinc-600 rounded-md">
        <a className="px-8 flex flex-row gap-5">
          <PiSignOutBold className="h-5 w-5 "/>
          <p className="text-sm">Sign out</p>
        </a>
      </div>
    </div>
  );
};

export default Settings;

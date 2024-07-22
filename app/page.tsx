import { checkSession } from "@/auth/getsession";
import {redirect}  from "next/navigation";
const Main = async () => {
  const session = await checkSession();
  if (!session){
    redirect("/")
  }else{
    redirect("/home")
  }
};

export default Main;

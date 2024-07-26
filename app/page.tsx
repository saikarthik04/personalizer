import Landingpage from "@/lib/components/landingpage";
import Home from "./home/page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/authOptions";
const Main = async () => {
  const session = await getServerSession(authOptions);
  if (!session && session == null){
    return (<Landingpage/>)
  }
    return (<Home/>)
};

export default Main;

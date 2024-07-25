import { checkSession } from "@/auth/getsession";
import Landingpage from "@/components/landingpage";
import Home from "./home/page";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
const Main = async () => {
  const session = await getServerSession(authOptions);
  if (!session){
    return (<Landingpage/>)
  }
    return (<Home/>)
};

export default Main;

import { checkSession } from "@/auth/getsession";
import Landingpage from "@/components/landingpage";
import Home from "./home/page";
const Main = async () => {
  const session = await checkSession();
  if (!session){
    return (<Landingpage/>)
  }
    return (<Home/>)
};

export default Main;

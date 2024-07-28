import Landingpage from "@/app/lib/components/landingpage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth/authOptions";
import { redirect  } from "next/navigation";
const Main = async () => {
  const session = await getServerSession(authOptions);
  if (!session && session == null){
    return (<Landingpage/>)
  }
  if(session.user!=null){
    redirect('/home'); 
  }
};

export default Main;

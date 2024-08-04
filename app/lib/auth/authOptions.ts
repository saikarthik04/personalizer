import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,  
  // callbacks:{
  //   async session({session,user}){
  //     session.user.email = user.email
  //     return session.user
  //   }
  // }
}
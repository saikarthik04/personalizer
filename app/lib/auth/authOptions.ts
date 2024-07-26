import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { callbackify } from "util";
export const authOptions: AuthOptions = {
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
  ],
  secret: process.env.NEXTAUTH_SECRET,  
  
}
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
interface CustomJWT extends JWT {
  exp: number; // Define 'exp' as a number (expiration in seconds)
  isNewSession:boolean;
}
export const authOptions: AuthOptions = {
  providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
  ],
  session: {
    strategy: 'jwt',  // Use JWT-based sessions
    maxAge: 24 * 60 * 60,       // Session expires after 60 seconds (1 minute)
  },
  jwt: {
    maxAge: 24 * 60 * 60,        // JWT expires after 60 seconds (1 minute)
  },
  secret: process.env.NEXTAUTH_SECRET as string,  
  callbacks: {
    async jwt({ token, account }) {
      // Extend the token with the 'exp' field if the account exists (user signs in)
      const customToken = token as CustomJWT;
      if (account) {
        customToken.exp = Math.floor(Date.now() / 1000) + 60; // Set expiration to 60 seconds from now
        customToken.isNewSession = true;
      }
      else {
        customToken.isNewSession = false;
      }
      return customToken;
    },
    async session({ session, token }) {
      // Cast token to CustomJWT to access 'exp' field
      const customToken = token as CustomJWT;
      session.is_newsession = customToken.isNewSession;
      session.expires = new Date(customToken.exp * 1000).toISOString(); // Set session expiration
      return session;
    },
  },
}
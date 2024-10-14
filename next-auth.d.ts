// types/next-auth.d.ts
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Profile {
    email_verified?: boolean;
  }

  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
    is_newsession: boolean;
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}

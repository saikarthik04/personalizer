import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { NextRequest, NextResponse } from "next/server";

export const authOptions:AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// const authHandler = async (req: NextRequest) => {
//   const adaptedReq = {
//     ...req,
//     query: Object.fromEntries(req.nextUrl.searchParams),
//     cookies: Object.fromEntries(req.cookies),
//   };

//   const res = new NextResponse();

//   await handler(adaptedReq, res);

//   return res;
// };

// export const GET = async (req: NextRequest) => {
//   return await authHandler(req);
// };

// export const POST = async (req: NextRequest) => {
//   return await authHandler(req);
// };
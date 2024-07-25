import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest, NextResponse } from "next/server";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(options);

const authHandler = async (req: NextRequest) => {
  const adaptedReq = {
    ...req,
    query: Object.fromEntries(req.nextUrl.searchParams),
    cookies: Object.fromEntries(req.cookies),
  };

  const res = new NextResponse();

  await handler(adaptedReq, res);

  return res;
};

 const GET = async (req: NextRequest) => {
  return await authHandler(req);
};

 const POST = async (req: NextRequest) => {
  return await authHandler(req);
};
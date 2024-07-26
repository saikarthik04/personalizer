import { authOptions } from "@/lib/auth/authOptions";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const handler = NextAuth(authOptions);

const authHandler = async (req: NextRequest) => {
  const adaptedReq = {
    ...req,
    query: Object.fromEntries(req.nextUrl.searchParams),
    cookies: Object.fromEntries(req.cookies),
  };

  const res = new NextResponse();
  await handler(adaptedReq as any, res as any); 
  return res;
};

export async function GET(req: NextRequest) {
  return authHandler(req);
}

export async function POST(req: NextRequest) {
  return authHandler(req);
}

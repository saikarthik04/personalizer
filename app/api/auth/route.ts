import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { NextRequest, NextResponse } from 'next/server';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
const authHandler = NextAuth(options);

export async function GET(req: NextRequest) {
  return authHandler(req, NextResponse);
}

export async function POST(req: NextRequest) {
  return authHandler(req, NextResponse);
}

import { NextRequest, NextResponse } from 'next/server';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
};

const handler = NextAuth(options);

export async function GET(req: NextRequest) {
    return handler(req, NextResponse);
}

export async function POST(req: NextRequest) {
    return handler(req, NextResponse);
}

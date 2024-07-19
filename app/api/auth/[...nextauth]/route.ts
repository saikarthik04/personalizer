// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { NextApiRequest, NextApiResponse } from 'next';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
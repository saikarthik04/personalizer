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
const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export { authHandler as GET, authHandler as POST };
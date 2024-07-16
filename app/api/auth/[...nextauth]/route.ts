import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options:AuthOptions= {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
};
const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
export { authHandler as GET, authHandler as POST };

import {authOptions} from "@/utils/authOptions"
import NextAuth from "next-auth";
const handler = NextAuth(authOptions);
export const dynamic = 'force-static'
export { handler as GET, handler as POST };

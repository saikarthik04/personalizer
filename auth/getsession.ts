import { getServerSession } from "next-auth/next";
export async function checkSession() {
  const session = await getServerSession();
  const sessionData = {...session}
  return sessionData
}

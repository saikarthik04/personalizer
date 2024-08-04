import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth/authOptions";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session,
    },
  };
}

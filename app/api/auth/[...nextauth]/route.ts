import { authOptions } from "@/app/lib/auth/authOptions";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

export async function GET( req: NextApiRequest,res: NextApiResponse ) {
  return NextAuth(req,res,authOptions)
  }
  
export async function POST( req: NextApiRequest,res: NextApiResponse ) {
  return NextAuth(req,res,authOptions)
  }
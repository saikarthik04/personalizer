import { authOptions } from "@/app/lib/auth/authOptions";
import { NextRequest, NextResponse } from "next";
import NextAuth from "next-auth";

export async function GET( req: NextRequest,res: NextResponse ) {
  return NextAuth(req,res,authOptions)
  }
  
export async function POST( req: NextRequest,res: NextResponse ) {
  return NextAuth(req,res,authOptions)
  }

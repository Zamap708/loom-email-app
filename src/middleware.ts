import { getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { firebaseApp } from "./app/firebase";
import { redirect } from "next/navigation";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
    const activeSession = req.cookies.get("session");
//     if (req.nextUrl.pathname !== '/') {
//         if (!activeSession) {
//           return NextResponse.redirect(new URL("/", req.url));
//         }
//     }
  return res;
}

export const config = {
  }
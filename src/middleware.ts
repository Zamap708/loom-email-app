import { getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { firebaseApp } from "./app/firebase";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    return res
}
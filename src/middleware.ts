import { getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { firebaseApp } from "./app/firebase";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const auth = getAuth(firebaseApp)
    // console.log(auth.currentUser)
    const user = auth.currentUser;
    const uid = user?.uid;
    uid ? res.cookies.set("userID", uid) : "";
    console.log(uid)
    return res
}
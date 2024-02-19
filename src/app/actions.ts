import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server"
import { firebaseApp } from "./firebase"
import { useRouter } from "next/navigation";

export async function test() {
    const auth = getAuth(firebaseApp)
    const user = auth.currentUser
    user ? console.log(user.uid) : console.log("NO USER FOUND")
    // const res = NextResponse.next()
    console.log(user)
    // middletest(user)
}
const middletest = async (userID: string) => {
    const res = NextResponse.next()
    res.cookies.set("Hello", "World")
    return res
}

export const signIn = async () => {
    const auth = getAuth(firebaseApp); // Get the Firebase Auth instance
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // Handle successful sign-in
        const user = result.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        // Handle errors during sign-in
        console.error("Error signing in with Google:", error);
      });
  }
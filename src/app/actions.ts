import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { firebaseApp } from "./firebase";
import { cookies } from "next/headers";
// import { useRouter } from "next/navigation";

export async function test() {
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;
  user ? console.log(user.uid) : console.log("NO USER FOUND");
  const res = NextResponse.next();
  console.log(user);
  // middletest(user)
}
const middletest = async () => {
  const res = NextResponse.next();
  res.cookies.set("Hello", "World");
  return res;
};

export const signIn = async () => {
  const auth = getAuth(firebaseApp); //Get the Firebase Auth instance
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUidCookie(token);
      setUser("saa", "user.uid", "token");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const setUidCookie = async (token: string) => {
  const data = await fetch("http://localhost:3000/api/auth",
      {
          method: "POST",
          body: JSON.stringify(token)
  });
  console.log(data);
};

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { firebaseApp } from "./firebase";
import { cookies } from "next/headers";
// import { useRouter } from "next/navigation";

const url = "http://localhost:3000/api/";

export const signIn = async () => {
  const auth = getAuth(firebaseApp); //Get the Firebase Auth instance
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      const token = "TOKEN";
      // The signed-in user info.
      const user = result.user;
      //   console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUserCookie(user, token);
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

const setUserCookie = async (user, token) => {
  const data = await fetch(url + "auth", {
    method: "POST",
    body: JSON.stringify({ user, token }),
  });
  console.log(data);
};

export const getUserCookie = async () => {
  //   const data = await fetch("http://localhost:3000/api/auth", {
  //     method: "GET",
  //   });
  //     return data
  //   const username = cookies().get('session')?.value;
  // return username
};

export const getClients = async () => {
  const data = await fetch(url + "clients");
  console.log("GOT CLIENTS: " + data)
  return data
};

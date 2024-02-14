"use client";
import React from "react";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase";

export default function SignIn() {
  return (
    <button
    onClick={() => {
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
    }}
    className="m-2 p-3 bg-white rounded-full text-black shadow"
  >
    Sign In
  </button>
  )
}

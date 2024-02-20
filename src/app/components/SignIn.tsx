"use client";
import React from "react";
import "firebase/auth";
import { signIn } from "../lib";
// import { setUser } from "../api/auth/userDetails";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { firebaseApp } from "../firebase";
// import { useRouter } from "next/navigation";
// import { signIn } from "../actions";
export default function SignIn() {

  return (
    <button
      onClick={signIn}
      className="m-2 p-3 bg-white rounded-full text-black shadow"
    >
      Sign In
    </button>
  );
}

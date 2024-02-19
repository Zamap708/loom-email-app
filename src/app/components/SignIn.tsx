"use client";
import React from "react";
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useRouter } from "next/navigation";
import { signIn } from "../actions";
import init
export default function SignIn() {
  const router = useRouter()
  return (
    <button
    onClick={signIn}
    className="m-2 p-3 bg-white rounded-full text-black shadow"
  >
    Sign In
  </button>
  )
}

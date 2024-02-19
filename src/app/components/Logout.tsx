"use client";
import { getAuth } from "firebase/auth";
import React from "react";
import { firebaseApp } from "../firebase";
import { useRouter } from "next/navigation";

export default function Logout() {
  const auth = getAuth(firebaseApp);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.log("error logging out");
    }
  };
  return (
    <div
      onClick={handleLogout}
      className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300"
    >
      Log out
    </div>
  );
}

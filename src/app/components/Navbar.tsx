"use client";
import React from "react";
import "firebase/auth";
import SignIn from "./SignIn";


export default function Navbar(props: any) {
  return (
    <nav className="h-20 w-full m-0 p-6 flex justify-between items-center bg-sky-400">
      <div className="text-white">TidalMail</div>
      <div className="flex items-center">
        <SignIn />
        {/* <button className="m-2 p-3 bg-white rounded-full text-black shadow">
          Register
        </button> */}
      </div>
    </nav>
  );
}

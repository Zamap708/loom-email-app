'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logout from "./Logout";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";

export default function Sidebar() {
  // const [uid, setUid] = useState("")
  // const getUID = async () => {
  //   const auth = await getAuth(firebaseApp);
  //   if (auth != null) {
  //     const user: string = auth.currentUser;
  //     console.log(user.uid);
  //     return user.uid
  //   }
  // };
  // const uid = await getUID();
  // console.log(uid);

  return (
    <section className="h-full w-1/12 box-border bg-sky-400/80 flex flex-col justify-between shadow">
      <ul>
        <Link href={"/dashboard"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Dashboard
          </li>
        </Link>
        <Link href={"/emails"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Emails
          </li>
        </Link>
        <Link href={"/clients"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Clients
          </li>
        </Link>
        <Link href={ "/analytics"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Analytics
          </li>
        </Link>
        <Link href={"/settings"}>
          <li className="p-6 py-4 text-white box-border bg-sky-400 hover:bg-sky-300">
            Settings
          </li>
        </Link>
      </ul>
      <Logout />
    </section>
  );
}

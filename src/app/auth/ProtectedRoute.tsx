"use client";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { firebaseApp } from "../firebase";
import { usePathname, useRouter } from "next/navigation";
import { test } from "../actions";
import { revalidatePath } from "next/cache";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  // const [userId, setUserId] = useState("");
  // const router = useRouter();
  // const pathname = usePathname();
  // const auth = getAuth(firebaseApp);

  // const getUser = async () => {
  //   const user = await auth.currentUser;
  //   const uid = user?.uid;
  //   uid ? setUserId(uid) : setUserId("");
  // };
  // onAuthStateChanged(auth, () => {
  //   getUser();
  // });
  // useEffect(() => {
  //   // getUser();
  //   // test(userId);
  // }, [pathname]);
  return <>{children}</>;
}

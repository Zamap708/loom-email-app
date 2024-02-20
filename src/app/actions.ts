'use server'

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { cookies } from "next/headers";

const url = "http://localhost:3000/api/";

export const setUserCookie = async (user, token) => {
  const data = await fetch(url + "auth", {
    method: "POST",
    body: JSON.stringify({ user, token }),
  });
  console.log(data);
};

export const getUserCookie = async () => {
    const data = await fetch("http://localhost:3000/api/auth", {
      method: "GET",
    });
      // return data
    const username = cookies().get('session')?.value;
  return {username}
};

// export const getClients = async () => {
//   let res = await fetch(url + "clients");
//   let data = await res.json()
//   console.log("GOT CLIENTS: " + data);
//   return res;
// };
export const getClients = async () => {
  const parentDocRef = doc(db, "users", "eNBvCQKvmGuPOG27o6fr");
  const subcollectionDocRef = collection(parentDocRef, "clients");
  const querySnapshot = await getDocs(subcollectionDocRef);

  const fetchedData = querySnapshot.docs.map((doc) => {
    // Access document data
    // console.log("Document ID:", doc.id);
    // console.log("Document data:", doc.data());

    // Return object with document ID and data
    return {
      id: doc.id,
      docData: doc.data(),
    };
  });
  console.log(fetchedData);
  return fetchedData
}
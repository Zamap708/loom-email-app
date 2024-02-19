import { db } from "@/app/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const res = new NextResponse();
  const parentDocRef = doc(db, "users", "eNBvCQKvmGuPOG27o6fr");
  const subcollectionDocRef = collection(parentDocRef, "clients");
  const querySnapshot = await getDocs(subcollectionDocRef);

  querySnapshot.forEach((doc) => {
    // Access document data
    console.log('Document ID:', doc.id);
    console.log('Document data:', doc.data());
  });
  return res;
}

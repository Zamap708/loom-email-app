import { db } from "@/app/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

// export async function GET() {
//   const parentDocRef = doc(db, "users", "eNBvCQKvmGuPOG27o6fr");
//   const subcollectionDocRef = collection(parentDocRef, "clients");
//   const querySnapshot = await getDocs(subcollectionDocRef);

//   const fetchedData = querySnapshot.docs.map((doc) => {
//     // Access document data
//     // console.log("Document ID:", doc.id);
//     // console.log("Document data:", doc.data());

//     // Return object with document ID and data
//     return {
//       id: doc.id,
//       docData: doc.data(),
//     };
//   });
//     console.log(fetchedData);

//   return Response.json(fetchedData);
// }

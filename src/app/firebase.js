// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase-admin/auth";
// import { applicationDefault } from "firebase-admin/app";
// import { auth } from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlXIKUUpglAmR3DUASqEmAqhHH6Jrxd30",
  authDomain: "tidalmail-79fcd.firebaseapp.com",
  projectId: "tidalmail-79fcd",
  storageBucket: "tidalmail-79fcd.appspot.com",
  messagingSenderId: "967207537802",
  appId: "1:967207537802:web:7bc5f0ce18e0702c53f173",
  measurementId: "G-YMJ92MGHL7",
  // credential: applicationDefault()
  // credential: cert(serviceAccount)
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(firebaseApp);
// export const auth = getAuth(firebaseApp)

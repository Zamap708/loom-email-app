import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { setUserCookie } from "./actions";

export const signIn = async () => {
    const auth = getAuth(firebaseApp); //Get the Firebase Auth instance
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        const token = "TOKEN";
        // The signed-in user info.
        const user = result.user;
        //   console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setUserCookie(user, token);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
import React from "react";
import GoogleSignin from "../../../public/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  // signInWithRedirect,
  signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = async () => {
    // const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(userCred);
  };

  return (
    <main className="welcome">
      <h2>Bienvenido al chat de AppMinistrador.</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Inicia sesión con tu cuenta para chatear con los vecinos.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
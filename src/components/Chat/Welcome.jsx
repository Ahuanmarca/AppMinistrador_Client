import React from "react";
import Google from "../Icons/GoogleIcon/Google.png"
import { auth } from "../../firebase";
import styles from '../../pages/MensajesPage/MensajesPage.module.css';
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
    <main className={styles.welcome}>
      <h2>Bienvenido al chat de AppMinistrador.</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p>Inicia sesión con tu cuenta para chatear con los vecinos.</p>
      <button className={styles.signIn}>
        <img
          onClick={googleSignIn}
          src={Google}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
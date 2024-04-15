// import React, { useState } from "react";
// import GoogleSignin from "../../../public/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../firebase";
// import Google from "../Icons/GoogleIcon/Google.png"
import {useAuthState} from "react-firebase-hooks/auth";
// import {
//   GoogleAuthProvider,
//   // signInWithRedirect,
//   signInWithPopup} from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  // const googleSignIn = async () => {
  //   // const provider = new GoogleAuthProvider();
  //   // signInWithRedirect(auth, provider);
  //   const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
  //   console.log(userCred);
  // };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      {/* <h1 className="title-bar">React Chat</h1> */}
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Cerrar Sesión
        </button>
      ) : (
        <button className="sign-in">
          {/* <img
            onClick={googleSignIn}
            src={Google}
            alt="sign in with google"
            type="button"
          /> */}
        </button>
      )}
    </nav>
  );
};

export default NavBar;
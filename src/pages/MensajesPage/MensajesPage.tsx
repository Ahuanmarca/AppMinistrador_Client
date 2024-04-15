// import * as React from 'react';
// import { useState } from 'react';
import {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import styles from  './MensajesPage.module.css';
import NavBar from "../../components/Chat/NavBar.jsx"
import ChatBox from "../../components/Chat/ChatBox.jsx"
import Welcome from "../../components/Chat/Welcome.jsx"
import Appbar from "../../components/Appbar-ChatApp/Appbar.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
function MensajesPage() {
  const [user] = useAuthState(auth);

  return(
    <div className={styles.App}>
      <Appbar></Appbar>
      <div className={styles.sidebar}>
      <Sidebar></Sidebar>
      </div>
      <NavBar/>
      {!user ? (<Welcome/>) : (<ChatBox/>)}
    </div>
  );
}

export default MensajesPage;

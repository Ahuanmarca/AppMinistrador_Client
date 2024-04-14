// import * as React from 'react';
// import { useState } from 'react';
import {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import './MensajesPage.css';
import NavBar from "../../components/Chat/NavBar.jsx"
import ChatBox from "../../components/Chat/ChatBox.jsx"
import Welcome from "../../components/Chat/Welcome.jsx"


function MensajesPage() {
  const [user] = useAuthState(auth);

  return(
    <div className="App">
      <NavBar/>
      {!user ? (<Welcome/>) : (<ChatBox/>)}
    </div>
  );
}

export default MensajesPage;

import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from '../../pages/MensajesPage/MensajesPage.module.css';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div 
    className={`${styles.chatBubble} ${message.uid === user.uid ? styles.right : ""}`}
    >
      <img
        className={styles.chatBubble__left} 
        src={message.avatar} 
        alt="user avatar"
      />
      <div className={styles.chatBubble__right}>
        <p className={styles.userName}>{message.name}</p>
        <p className={styles.userMessage}>
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
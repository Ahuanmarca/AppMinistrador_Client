import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgX3Ly9oaU8y3uRYgm1VItJOd5g349tjY",
  authDomain: "appministrador-2024.firebaseapp.com",
  projectId: "appministrador-2024",
  storageBucket: "appministrador-2024.appspot.com",
  messagingSenderId: "131124009386",
  appId: "1:131124009386:web:461936dd4d528276ac73d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
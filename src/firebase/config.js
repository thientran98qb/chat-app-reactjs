// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmJiQNY2MUFDoAjZNRoIwjUI0S4-JGfSA",
  authDomain: "app-chat-44c9c.firebaseapp.com",
  projectId: "app-chat-44c9c",
  storageBucket: "app-chat-44c9c.appspot.com",
  messagingSenderId: "281985486205",
  appId: "1:281985486205:web:3efe3ecc8ba6678d445014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth' 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SsufIxgY_zwuYsBDifNhHK0xRAHeXBI",
  authDomain: "react-firebase-822d4.firebaseapp.com",
  projectId: "react-firebase-822d4",
  storageBucket: "react-firebase-822d4.firebasestorage.app",
  messagingSenderId: "923322977946",
  appId: "1:923322977946:web:d738757eb1c1ec1d22d923",
  measurementId: "G-JLP2LFY0F0"
};

// Initializ e Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app);
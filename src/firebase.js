// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fea2a.firebaseapp.com",
  projectId: "mern-estate-fea2a",
  storageBucket: "mern-estate-fea2a.firebasestorage.app",
  messagingSenderId: "619052464667",
  appId: "1:619052464667:web:d333306b1f74fefd5b56be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
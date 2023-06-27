import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH0CKhibsFg3R8xjOUbialfPNRfa5OrDQ",
  authDomain: "react-netflix-clone-772f6.firebaseapp.com",
  projectId: "react-netflix-clone-772f6",
  storageBucket: "react-netflix-clone-772f6.appspot.com",
  messagingSenderId: "969408643714",
  appId: "1:969408643714:web:393744300027cad7f46a9b",
  measurementId: "G-DKDNLBP12L"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
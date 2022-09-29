// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "cuddly-bubbly.firebaseapp.com",
  projectId: "cuddly-bubbly",
  storageBucket: "cuddly-bubbly.appspot.com",
  messagingSenderId: "350781619240",
  appId: "1:350781619240:web:f8cc58f0914dae6987491d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
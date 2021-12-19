import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0oMLXMLhxmkIQ8Ifjo2okSmxnwW73uE4",
  authDomain: "clothesapp-suarez.firebaseapp.com",
  projectId: "clothesapp-suarez",
  storageBucket: "clothesapp-suarez.appspot.com",
  messagingSenderId: "516968768348",
  appId: "1:516968768348:web:d9594b66bb06255cfdd799",
  measurementId: "G-DKZY86HFNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
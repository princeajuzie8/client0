// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGUFSWXwaXCl_MDNAYynFuTUK9SVuZZSE",
  authDomain: "preci-734ab.firebaseapp.com",
  projectId: "preci-734ab",
  storageBucket: "preci-734ab.appspot.com",
  messagingSenderId: "115967957558",
  appId: "1:115967957558:web:c114ff176fc759e2d2d697",
  measurementId: "G-TKDVQQKR9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwZXiN0c3l2oXnKoHs5uRtRx2AVr_riCY",
  authDomain: "bitlab-sliit.firebaseapp.com",
  projectId: "bitlab-sliit",
  storageBucket: "bitlab-sliit.appspot.com",
  messagingSenderId: "306720676781",
  appId: "1:306720676781:web:034412a38346dd82be1f24",
  measurementId: "G-4P2GQDY0W8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
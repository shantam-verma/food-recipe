// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "@/utils/constants";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "food-recipe-d11e9.firebaseapp.com",
  projectId: "food-recipe-d11e9",
  storageBucket: "food-recipe-d11e9.appspot.com",
  messagingSenderId: "509221871484",
  appId: "1:509221871484:web:1b7ca8e4f59a3d59ef8ef9",
  measurementId: "G-DHZ4TPNB00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { app, auth };

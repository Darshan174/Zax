

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
import 'firebase/auth';
import { getAuth } from 'firebase/auth'
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGR7BjjM2hYpjUBZg7jbxDP-Dag0qQpmI",
  authDomain: "zaxecommerce.firebaseapp.com",
  projectId: "zaxecommerce",
  storageBucket: "zaxecommerce.appspot.com",
  messagingSenderId: "980574790214",
  appId: "1:980574790214:web:80d8c13be52f0c67d3e047",
  measurementId: "G-0JV2DPKKM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
const auth = getAuth(app);

export { auth };

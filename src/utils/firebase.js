// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_6IZX7Klfj6eVhHsaJS_haOF6A956ivI",
  authDomain: "netflixmickey.firebaseapp.com",
  projectId: "netflixmickey",
  storageBucket: "netflixmickey.firebasestorage.app",
  messagingSenderId: "118804565903",
  appId: "1:118804565903:web:ec2dc8fc2151a9b2a285fa",
  measurementId: "G-3QGZRB25Z8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

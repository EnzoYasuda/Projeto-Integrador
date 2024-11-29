// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMmxOGFPDa-FTykKcnTVlnmKBKdsiB7vg",
  authDomain: "tune-trails-fb1a0.firebaseapp.com",
  projectId: "tune-trails-fb1a0",
  storageBucket: "tune-trails-fb1a0.firebasestorage.app",
  messagingSenderId: "33190521631",
  appId: "1:33190521631:web:e5abaf75a77c8579421e2a",
  measurementId: "G-T53Z75JWGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
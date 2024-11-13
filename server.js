const express = require('express');
var formidable = require('formidable');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8081, function() {
  console.log("Servidor Rodando na url http://localhost:8081");
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4kahAHUIQTIzEaORlqwuqAuE0IilsfN0",
    authDomain: "notes-282a2.firebaseapp.com",
    projectId: "notes-282a2",
    storageBucket: "notes-282a2.appspot.com",
    messagingSenderId: "418791059782",
    appId: "1:418791059782:web:2674ef7d9d7074bc47f547",
    measurementId: "G-RH9W4LKGED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
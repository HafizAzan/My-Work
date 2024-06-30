import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBk9EIXVq6bdcFE42CMEB4MMU6x0tmwduE",
    authDomain: "pwagram-1410e.firebaseapp.com",
    databaseURL: "https://pwagram-1410e.firebaseio.com",
    projectId: "pwagram-1410e",
    storageBucket: "pwagram-1410e.appspot.com",
    messagingSenderId: "186092825798",
    appId: "1:186092825798:web:e69b8900dfca462a6a3bc7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// const firebaseConfig = {
//     apiKey: "AIzaSyA4kahAHUIQTIzEaORlqwuqAuE0IilsfN0",
//     authDomain: "notes-282a2.firebaseapp.com",
//     projectId: "notes-282a2",
//     storageBucket: "notes-282a2.appspot.com",
//     messagingSenderId: "418791059782",
//     appId: "1:418791059782:web:9d60743eea96572747f547",
//     measurementId: "G-NQ2C0BRTG0"
//   };
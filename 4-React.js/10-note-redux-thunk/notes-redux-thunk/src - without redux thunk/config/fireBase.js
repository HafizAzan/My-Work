// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBELbhTbkEZyIdyUV99GtcIr5qztSfQ42g",
//     authDomain: "notes-3cfe4.firebaseapp.com",
//     projectId: "notes-3cfe4",
//     storageBucket: "notes-3cfe4.appspot.com",
//     messagingSenderId: "555479484088",
//     appId: "1:555479484088:web:88875a7b3a81151f24d64d",
//     measurementId: "G-C44287FZJR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

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

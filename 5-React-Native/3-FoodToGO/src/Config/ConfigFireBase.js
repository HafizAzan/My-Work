// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzTYdWavhlJI590Ej5e65BVT2-fATZ1ME",
  authDomain: "food-to-go-react-native.firebaseapp.com",
  projectId: "food-to-go-react-native",
  storageBucket: "food-to-go-react-native.appspot.com",
  messagingSenderId: "762157852139",
  appId: "1:762157852139:web:6a45342368ed1de012e5ae",
  measurementId: "G-6K548JYQED",
};

// Initialize Firebase

initializeApp(firebaseConfig);

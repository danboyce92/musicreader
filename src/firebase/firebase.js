// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCveBlHttd1r96n1yFFA5oC1Yadanb9Qys",
  authDomain: "musicreader-2546f.firebaseapp.com",
  databaseURL: "https://musicreader-2546f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "musicreader-2546f",
  storageBucket: "musicreader-2546f.appspot.com",
  messagingSenderId: "866659713222",
  appId: "1:866659713222:web:214add71609dffa68bd7c7",
  measurementId: "G-WFKBKDCVMZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export function writeScore(userId, score) {
  set(ref(database, 'users/' + userId), {
    score: score
  });
}



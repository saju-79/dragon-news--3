// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkf1UFKUXN58KzkSuYV4182HrQbSo0wY",
  authDomain: "dragon-news-55e72.firebaseapp.com",
  projectId: "dragon-news-55e72",
  storageBucket: "dragon-news-55e72.firebasestorage.app",
  messagingSenderId: "274543348978",
  appId: "1:274543348978:web:d64c4c70b792d885a3946b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
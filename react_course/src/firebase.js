// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxhgmKuw05JN1ub3tkRAafYWZ59b-2PQM",
  authDomain: "todolist-4ea2c.firebaseapp.com",
  databaseURL: "https://todolist-4ea2c-default-rtdb.firebaseio.com",
  projectId: "todolist-4ea2c",
  storageBucket: "todolist-4ea2c.appspot.com",
  messagingSenderId: "271243139202",
  appId: "1:271243139202:web:d0a08113ba84484211fc9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Db = getDatabase(app);
export const auth = getAuth();

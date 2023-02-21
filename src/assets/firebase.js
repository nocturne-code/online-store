import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyiEw4kYIymqXnY8ZExXvDP5803nNQXf4",
  authDomain: "store-a112f.firebaseapp.com",
  projectId: "store-a112f",
  storageBucket: "store-a112f.appspot.com",
  messagingSenderId: "115096585000",
  appId: "1:115096585000:web:1ec19be1b073eae36e461d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {app,db};
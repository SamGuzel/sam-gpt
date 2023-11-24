// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnt7oiQhiPpkBZQORPAQzSEQm33HmzfIc",
  authDomain: "samgpt-8414d.firebaseapp.com",
  projectId: "samgpt-8414d",
  storageBucket: "samgpt-8414d.appspot.com",
  messagingSenderId: "282380469403",
  appId: "1:282380469403:web:490e17e4153d56d868f23e",
  measurementId: "G-EYPVTLSW40",
};

// Initialize Firebase
console.log("hit");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

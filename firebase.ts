import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

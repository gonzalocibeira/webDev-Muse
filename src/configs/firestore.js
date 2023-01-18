import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "webdev-muse.firebaseapp.com",
  projectId: "webdev-muse",
  storageBucket: "webdev-muse.appspot.com",
  messagingSenderId: "779867412619",
  appId: "1:779867412619:web:53b864f8ad4014474b5c8e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
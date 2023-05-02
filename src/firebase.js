
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCrEMESzMzmx-VBLLllCDYLoEzl3KQR4c4",
  authDomain: "portfolio-a3137.firebaseapp.com",
  projectId: "portfolio-a3137",
  storageBucket: "portfolio-a3137.appspot.com",
  messagingSenderId: "798848036507",
  appId: "1:798848036507:web:0c06e59340fcfff5afe03e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
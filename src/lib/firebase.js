import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-7b73f.firebaseapp.com",
  projectId: "reactchat-7b73f",
  storageBucket: "reactchat-7b73f.appspot.com",
  messagingSenderId: "214970143999",
  appId: "1:214970143999:web:bcac1140274a2803e3e8ca",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

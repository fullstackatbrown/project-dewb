import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCGvP6QCRKEmcrWqg_znLRuQpyIbST8lGY",
  authDomain: "dewb-project.firebaseapp.com",
  projectId: "dewb-project",
  storageBucket: "dewb-project.appspot.com",
  messagingSenderId: "312972047366",
  appId: "1:312972047366:web:44da7a2138f16806d97f87",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

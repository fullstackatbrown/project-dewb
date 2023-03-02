import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCtiSqB_puAJf0OUxdqkjgs5WUAp14XAp8",
  authDomain: "tester-dewb.firebaseapp.com",
  projectId: "tester-dewb",
  storageBucket: "tester-dewb.appspot.com",
  messagingSenderId: "29606429538",
  appId: "1:29606429538:web:3235a2dd531e426db1623b",
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

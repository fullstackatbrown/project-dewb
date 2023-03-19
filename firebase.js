import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCzds23y_0jtE9cKK5zsJIeRDPVupy7zhs",
  authDomain: "dewb-development.firebaseapp.com",
  projectId: "dewb-development",
  storageBucket: "dewb-development.appspot.com",
  messagingSenderId: "1086985921802",
  appId: "1:1086985921802:web:fa5efb9378674567b506f3"
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
/*export function signIn(phone) {
  return signInWithPhoneNumber(auth, phone, RecaptchaVerifier);
}*/
/*export function signUp(phone, password) {
  return createUserWithEmailAndPassword(auth, phone, password);
}*/

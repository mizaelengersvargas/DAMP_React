import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB81KYvQfM-fhPiAJf1y2TC_R4B_3xsOZY',
  authDomain: 'mauricioschiavo-watchlist.firebaseapp.com',
  projectId: 'mauricioschiavo-watchlist',
  storageBucket: 'mauricioschiavo-watchlist.appspot.com',
  messagingSenderId: '424804213597',
  appId: '1:424804213597:web:ed116c2515464c7d97feb4',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}

export function createUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}
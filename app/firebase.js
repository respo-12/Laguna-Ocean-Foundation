// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWREyWI3NYvMPedp5lIYtp3iL5EgWQCjI",
  authDomain: "laguna-ocean-foundation.firebaseapp.com",
  databaseURL: "https://laguna-ocean-foundation-default-rtdb.firebaseio.com",
  projectId: "laguna-ocean-foundation",
  storageBucket: "laguna-ocean-foundation.appspot.com",
  messagingSenderId: "928934230036",
  appId: "1:928934230036:web:9954488e62e6eb751e0f01",
  measurementId: "G-0CFWNW2JHL"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export { FIREBASE_AUTH, FIRESTORE_DB };
export async function doesDocExist(collectionName, documentId) {
  const docRef = doc(FIRESTORE_DB, collectionName, documentId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
}
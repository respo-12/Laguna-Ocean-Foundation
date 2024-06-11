// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore,collection,getDocs,addDoc,deleteDoc,setDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
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
const storage = getStorage(FIREBASE_APP);
export { FIREBASE_AUTH, FIRESTORE_DB };
export async function doesDocExist(collectionName, documentId) {
  const docRef = doc(FIRESTORE_DB, collectionName, documentId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
}
export function getUserName() {
  var user = FIREBASE_AUTH.currentUser;
  if (user) {
      return user.email;
  } else {
      return "False";
  }
}


export async function collectionCheck() {
  //returns number of images in User
  try {
    const userName = getUserName();
    if (userName=="False"){
      //realistically this should never trigger since you shouldnt be calling this without being logged in
      return "False";
    }
    const userDocRef = doc(FIRESTORE_DB, 'User', userName);
    const imagesCollectionRef = collection(userDocRef, 'Images');

    // Check if 'Images' collection exists
    const querySnapshot = await getDocs(imagesCollectionRef);

    if (querySnapshot.empty) {
      console.log("'Images' collection does not exist. Creating it...");

      // Create a new document in the 'Images' collection to ensure it exists
      const placeholderDocRef = await addDoc(imagesCollectionRef, { placeholder: true });
      console.log("'Images' collection created.");
      await deleteDoc(placeholderDocRef);
      console.log("Placeholder document deleted.");
      return 0;
    } else {
      const documentCount = querySnapshot.size;
      return documentCount;
    }
  } catch (error) {
    console.error('Error checking or creating the Images collection:', error);
  }
}

export async function uploadObservation(imageFile, description, location,type) {
  try {
    const userName=getUserName();
    if(userName=="False"){
      return "False";
    }
    let imageCount= await collectionCheck();
   
    const filePath = `gs://laguna-ocean-foundation.appspot.com/${userName}/${imageCount}`;
    const storageRef = ref(storage, filePath);

    // Upload the file
    
    const snapshot = await uploadBytes(storageRef, imageFile);
    const userDocRef = doc(FIRESTORE_DB, 'User', userName);
    const imageData = {
      Description: description,
      ImagePath: filePath,
      Location: location,
      Type: type
    };

    const newImageDocRef = doc(collection(userDocRef, 'Images'), (imageCount).toString());
    await setDoc(newImageDocRef, imageData);
    return;
  } catch (error) {
    console.error('Upload failed', error);
    throw error;
  }
}
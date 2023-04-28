// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth"

import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKZsjwqikuxxnMooId3xo3hcDhLshtOn0",
  authDomain: "craft-corner-db.firebaseapp.com",
  projectId: "craft-corner-db",
  storageBucket: "craft-corner-db.appspot.com",
  messagingSenderId: "229988541687",
  appId: "1:229988541687:web:2ebdc7b4dd51acbe6bdff2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    // 'prompt' : "select_sccount"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore()

export const createDocFromUserAuth = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid)
  console.log(userDocRef)
  const userSnapShot =  await getDoc(userDocRef)
  console.log(userSnapShot)
  console.log(userSnapShot.exists())
  //create a doc if dosent exists
  if(!userSnapShot.exists()){
    const {displayName,email} = userSnapShot;
    const createdAt = Date()

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      })
    }catch(err){
      console.log("Error creating user",err.message)
    }
  }
}
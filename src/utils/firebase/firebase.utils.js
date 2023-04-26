// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth"
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

const provider = GoogleAuthProvider();
provider.setCustomParameters({
    'prompt' : "select_sccount"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
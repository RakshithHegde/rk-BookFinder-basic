// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseApp = {
  apiKey: "AIzaSyAO0bk3LukEuarh6Z4FwTlimwetC01tCp8",
  authDomain: "rk-bookfinder-494d9.firebaseapp.com",
  projectId: "rk-bookfinder-494d9",
  storageBucket: "rk-bookfinder-494d9.appspot.com",
  messagingSenderId: "747865859442",
  appId: "1:747865859442:web:0c319124d2b20b855069eb",
  measurementId: "G-XD31TWCLHP",
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };

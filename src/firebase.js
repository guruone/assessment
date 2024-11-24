// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzcmAJ_I6dgfrbTlGOrFBPKwnZjmcBjfc",
  authDomain: "assessment-sps.firebaseapp.com",
  projectId: "assessment-sps",
  storageBucket: "assessment-sps.firebasestorage.app",
  messagingSenderId: "433753465918",
  appId: "1:433753465918:web:9d8ba43e0d46ed0a091d6f",
  measurementId: "G-S1HGJZMY2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firestore and Storage
export { db, storage };

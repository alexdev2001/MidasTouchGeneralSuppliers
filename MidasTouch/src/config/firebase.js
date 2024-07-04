// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { environment } from "../../../config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: environment.REACT_APP_FIREBASE_API_KEY,
  authDomain: environment.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: environment.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: environment.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: environment.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: environment.REACT_APP_FIREBASE_APP_ID,
  measurementId: environment.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
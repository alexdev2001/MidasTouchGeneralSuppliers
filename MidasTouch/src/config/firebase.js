// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzfpd5HEEXLyka_jZ2tQs87Al4mYzngi4",
  authDomain: "midastouchsuppliers.firebaseapp.com",
  projectId: "midastouchsuppliers",
  storageBucket: "midastouchsuppliers.appspot.com",
  messagingSenderId: "769943406391",
  appId: "1:769943406391:web:61dba3b8f7ccfeae98fcb2",
  measurementId: "G-ZWYMZ1HEW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
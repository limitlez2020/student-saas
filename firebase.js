// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Dx0TCEpGUxhSf4-kcmHwW40boAR_Ths",
  authDomain: "student-saas.firebaseapp.com",
  projectId: "student-saas",
  storageBucket: "student-saas.appspot.com",
  messagingSenderId: "301886692374",
  appId: "1:301886692374:web:f0aaeefba4521df80a6937",
  measurementId: "G-0YYFSB1YMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);


export { firestore };


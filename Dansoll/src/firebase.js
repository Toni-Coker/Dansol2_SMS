// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBytO5ohxNU02PC4uGPy2Rpz-nKY95wrwo",
  authDomain: "dansol-student-hub.firebaseapp.com",
  projectId: "dansol-student-hub",
  storageBucket: "dansol-student-hub.firebasestorage.app",
  messagingSenderId: "539245546405",
  appId: "1:539245546405:web:a996aac40cb5f8ea97364c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
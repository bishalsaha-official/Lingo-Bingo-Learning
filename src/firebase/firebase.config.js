// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIAVltjTHqSxFkCp3GYt2ktX6VhwKbj5o",
  authDomain: "lingo-bingo-1c759.firebaseapp.com",
  projectId: "lingo-bingo-1c759",
  storageBucket: "lingo-bingo-1c759.firebasestorage.app",
  messagingSenderId: "419559080633",
  appId: "1:419559080633:web:274567cc0d56954ffcd168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth
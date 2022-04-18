// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "react-router-dom"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAe5sFf8dDWI5ahk81WvdjtCvVLVQEJXBc",
    authDomain: "sishir-bindu-travel.firebaseapp.com",
    projectId: "sishir-bindu-travel",
    storageBucket: "sishir-bindu-travel.appspot.com",
    messagingSenderId: "164640586917",
    appId: "1:164640586917:web:0525e68a0dc8f0f006a14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQJDRj1-NNyj4jR-5Hp1NE69VMf-LrMJc",
  authDomain: "simple-firebase-react-86ac8.firebaseapp.com",
  projectId: "simple-firebase-react-86ac8",
  storageBucket: "simple-firebase-react-86ac8.appspot.com",
  messagingSenderId: "645557058549",
  appId: "1:645557058549:web:0c4e4fe18bae36746cbebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
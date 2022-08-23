// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE5m0YBN1oZamkK4FixxPvmefcAKBgUpo",
  authDomain: "the-delta-times-ba960.firebaseapp.com",
  projectId: "the-delta-times-ba960",
  storageBucket: "the-delta-times-ba960.appspot.com",
  messagingSenderId: "327848298287",
  appId: "1:327848298287:web:da04b18b2de92bfdcfc3da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDMszlSxGvWHezYOnsHppy9mtSMXM0rw",
  authDomain: "giphysentiment.firebaseapp.com",
  projectId: "giphysentiment",
  storageBucket: "giphysentiment.appspot.com",
  messagingSenderId: "669033236943",
  appId: "1:669033236943:web:27f5ccd6906032829d6aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
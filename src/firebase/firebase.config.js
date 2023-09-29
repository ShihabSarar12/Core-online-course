// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGmkTRWcgfhwbwn9HGkz9_-d2VLjrDAV4",
  authDomain: "core-996e6.firebaseapp.com",
  projectId: "core-996e6",
  storageBucket: "core-996e6.appspot.com",
  messagingSenderId: "915654543362",
  appId: "1:915654543362:web:2c6e6cba429b2f4b33ff1b",
  measurementId: "G-ZV1JX8FE2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

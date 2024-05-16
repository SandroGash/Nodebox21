// Import the functions you need from the SDKs you need
import Rebase from "re-base";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBKNDM__V7Xnj2hufYnQsX6WDz1Tb_jdY",
  authDomain: "nodebox-21.firebaseapp.com",
  projectId: "nodebox-21",
  storageBucket: "nodebox-21.appspot.com",
  messagingSenderId: "205442448781",
  appId: "1:205442448781:web:68ed486c1ef839d77711c4",
  measurementId: "G-3ENZG7TXXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const base = Rebase.createClass(firebase.database());

export { firebaseConfig };

export default base;

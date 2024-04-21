// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzZNgaZ36yzgiJUuXS1uIKmC1-PwEmMU0",
  authDomain: "linechat-49ae7.firebaseapp.com",
  projectId: "linechat-49ae7",
  storageBucket: "linechat-49ae7.appspot.com",
  messagingSenderId: "900708318366",
  appId: "1:900708318366:web:63c3ab45fbacfa5fbecf8f",
  measurementId: "G-WBVTHNR6LV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARaumCFQ9R-BfXW1fNyGz75K5TH0gmwH4",
    authDomain: "signal-clone-c6973.firebaseapp.com",
    projectId: "signal-clone-c6973",
    storageBucket: "signal-clone-c6973.appspot.com",
    messagingSenderId: "1037093189721",
    appId: "1:1037093189721:web:16d12dc6c9ddbf4a4d5948"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const auth = firebase.auth();
export {db, auth};
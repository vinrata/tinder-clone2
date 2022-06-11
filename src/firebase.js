//import firebase from "./firebase";
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCk_M4bC-R2NqRQ6R5Vj8QbkN-nlSdc6vA",
    authDomain: "tinder-clone2-f5f00.firebaseapp.com",
    projectId: "tinder-clone2-f5f00",
    storageBucket: "tinder-clone2-f5f00.appspot.com",
    messagingSenderId: "692623503158",
    appId: "1:692623503158:web:17ed4b8d40bde3b231cd97",
    measurementId: "G-VSXM3NL03S"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const database = firebaseApp.firestore();

    export default database;
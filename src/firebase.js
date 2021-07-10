// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBE1m5Ah_tkZb6Q04vzj-MFt3kTsHj4-IU",
  authDomain: "linkedin-clone-889b4.firebaseapp.com",
  projectId: "linkedin-clone-889b4",
  storageBucket: "linkedin-clone-889b4.appspot.com",
  messagingSenderId: "561644118888",
  appId: "1:561644118888:web:1fb5557a63f9134ec2ecdd",
  measurementId: "G-K4MEK1N4R4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBwKbRit0kPEHB1finFbcRJNtHT3WdGuNk",
  authDomain: "ig-reels-250f4.firebaseapp.com",
  projectId: "ig-reels-250f4",
  storageBucket: "ig-reels-250f4.appspot.com",
  messagingSenderId: "149613902964",
  appId: "1:149613902964:web:4612e944eb999983f7a521",
  measurementId: "G-R976J6XNR1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

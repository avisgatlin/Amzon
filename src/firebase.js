import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh0WKw8iUjYDtuWMBGuqZA7h_p9wHGYco",
  authDomain: "clone-61a25.firebaseapp.com",
  databaseURL: "https://clone-61a25.firebaseio.com",
  projectId: "clone-61a25",
  storageBucket: "clone-61a25.appspot.com",
  messagingSenderId: "612390037209",
  appId: "1:612390037209:web:c420fa027d426c0e8fc0c8",
  measurementId: "G-NQ8XHCLNSF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
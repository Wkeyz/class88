import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC-0KodR5vUikmQjwxIXT_TbfrmW3npGKQ",
  authDomain: "book-santa-24f9c.firebaseapp.com",
  projectId: "book-santa-24f9c",
  storageBucket: "book-santa-24f9c.appspot.com",
  messagingSenderId: "526537412158",
  appId: "1:526537412158:web:4734973a4b68382fff0b6f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
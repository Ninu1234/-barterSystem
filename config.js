import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDwIk7vPFhCr_A0OIRpKFupdoNbraeBhcM",
    authDomain: "santa-book-app.firebaseapp.com",
    databaseURL: "https://santa-book-app.firebaseio.com",
    projectId: "santa-book-app",
    storageBucket: "santa-book-app.appspot.com",
    messagingSenderId: "381910138873",
    appId: "1:381910138873:web:cb956194063b14260b8728"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
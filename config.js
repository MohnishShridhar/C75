import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyB8-VHfTZij0axO_Fzme1L6dgItsJ2UHqY",
    authDomain: "wireless-library-9c334.firebaseapp.com",
    databaseURL: "https://wireless-library-9c334.firebaseio.com",
    projectId: "wireless-library-9c334",
    storageBucket: "wireless-library-9c334.appspot.com",
    messagingSenderId: "262246353676",
    appId: "1:262246353676:web:3fe8ece26e120fae209729",
    measurementId: "G-9JCGJZZLW0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCmkGHsls-TUnjqsif9wmLmQIZNi2Eu00M",
    authDomain: "react-firebase-c0831.firebaseapp.com",
    databaseURL: "https://react-firebase-c0831.firebaseio.com",
    projectId: "react-firebase-c0831",
    storageBucket: "react-firebase-c0831.appspot.com",
    messagingSenderId: "848049847620",
    appId: "1:848049847620:web:87607bd8befa321635ab11"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase
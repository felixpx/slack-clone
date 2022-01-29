import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWksWnPWGdwkB2wfEI4gG9zYq3XuH0mpc",
    authDomain: "slack-clone-bbacf.firebaseapp.com",
    projectId: "slack-clone-bbacf",
    storageBucket: "slack-clone-bbacf.appspot.com",
    messagingSenderId: "837135201290",
    appId: "1:837135201290:web:2c06598be20967b2e11bf3",
    measurementId: "G-DCXDVCXSRC"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };
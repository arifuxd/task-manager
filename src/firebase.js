import firebase from "firebase/app"
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeDjkj8jmWuZ02Gheko7tucVa4Rh0xc1o",
    authDomain: "todo-app-939f2.firebaseapp.com",
    projectId: "todo-app-939f2",
    storageBucket: "todo-app-939f2.appspot.com",
    messagingSenderId: "285112003215",
    appId: "1:285112003215:web:ddc8390ec233562e885efa",
    measurementId: "G-WRGE2VLJNP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
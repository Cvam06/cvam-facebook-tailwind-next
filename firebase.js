import firebase from 'firebase';
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZqwdFs5fXjx4NHS72F_dh9rS1dz2uFDM",
    authDomain: "cvam-facebook-2.firebaseapp.com",
    projectId: "cvam-facebook-2",
    storageBucket: "cvam-facebook-2.appspot.com",
    messagingSenderId: "431435295593",
    appId: "1:431435295593:web:a3dc4912c300fdd4f96bf8",
    measurementId: "G-8CC9T2GTTV"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
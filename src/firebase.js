// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQlyZvqf-170_2vuCziBCbIh0eOCNm_6s",
    authDomain: "insta-clone-1e4ca.firebaseapp.com",
    databaseURL: "https://insta-clone-1e4ca.firebaseio.com",
    projectId: "insta-clone-1e4ca",
    storageBucket: "insta-clone-1e4ca.appspot.com",
    messagingSenderId: "1091264847199",
    appId: "1:1091264847199:web:746d9be6b6e24fb12f6aea",
    measurementId: "G-KJBWQPMQPK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
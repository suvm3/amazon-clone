import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_bm4NE4_SKHx0zXKZZOiO3NwuQzGe8zE",
    authDomain: "clone-2-febf6.firebaseapp.com",
    projectId: "clone-2-febf6",
    storageBucket: "clone-2-febf6.appspot.com",
    messagingSenderId: "70099130929",
    appId: "1:70099130929:web:e4bebe8fcf976374e55310"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
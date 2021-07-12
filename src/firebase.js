import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyA_bm4NE4_SKHx0zXKZZOiO3NwuQzGe8zE",
//     authDomain: "clone-2-febf6.firebaseapp.com",
//     projectId: "clone-2-febf6",
//     storageBucket: "clone-2-febf6.appspot.com",
//     messagingSenderId: "70099130929",
//     appId: "1:70099130929:web:e4bebe8fcf976374e55310"
// };

const firebaseConfig = {
    apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
    authDomain: "challenge-4b2b2.firebaseapp.com",
    databaseURL: "https://challenge-4b2b2.firebaseio.com",
    projectId: "challenge-4b2b2",
    storageBucket: "challenge-4b2b2.appspot.com",
    messagingSenderId: "962418448875",
    appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
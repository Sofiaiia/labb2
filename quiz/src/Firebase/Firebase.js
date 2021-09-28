import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAo4EfQNMBxysu2fNp7-wDCDFeoGfgVyjk",
    authDomain: "labb2-505a1.firebaseapp.com",
    projectId: "labb2-505a1",
    storageBucket: "labb2-505a1.appspot.com",
    messagingSenderId: "931243325234",
    appId: "1:931243325234:web:3b855122289c32aee8892b",
    measurementId: "G-RYG316KGKB"
  };
    
const app = firebase.initializeApp(firebaseConfig); 
const auth = app.auth();
const db= app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInGoogle = async() => {};
const signInEmail = async(email,password) => {};
const logout = () => {
    auth.signOut();
};

export {auth,db,signInGoogle,signInEmail,logout};
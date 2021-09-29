import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
import {GoogleAuthProvider,signInWithPopup,getAuth,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAo4EfQNMBxysu2fNp7-wDCDFeoGfgVyjk",
    authDomain: "labb2-505a1.firebaseapp.com",
    projectId: "labb2-505a1",
    storageBucket: "labb2-505a1.appspot.com",
    messagingSenderId: "931243325234",
    appId: "1:931243325234:web:3b855122289c32aee8892b",
    measurementId: "G-RYG316KGKB"
  };
    
const app = initializeApp(firebaseConfig); 
const auth = getAuth();
const db= getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInGoogle = async() => {
    
    try{
        const result = await signInWithPopup(auth,googleProvider);
        const user = result.user;
    } catch(error){
        console.error(error);
        alert(error.message);
    }
};

const signInEmail = async(email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
        })
    }catch(error){
        console.error(error);
        alert(error.message);
    }
};

const logout = () => {
    signOut(auth);
};

const registerUser = (email,password) => {
    createUserWithEmailAndPassword(auth,email,password)
    .then(
        (userCredential)=>{
            const user = userCredential.user;
        })
    .catch((error) => {
        console.error(error);
        alert(error.message);
    })
}

export {auth,db,signInGoogle,signInEmail,logout,registerUser};
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkmVgH_b2JoQjDEXHeEDDH3oUQR6ZZa74",
    authDomain: "react-2020-tutorial.firebaseapp.com",
    databaseURL: "https://react-2020-tutorial.firebaseio.com",
    projectId: "react-2020-tutorial",
    storageBucket: "react-2020-tutorial.appspot.com",
    messagingSenderId: "252318394831",
    appId: "1:252318394831:web:5ceb483e05859442b4caba",
    measurementId: "G-M8X3D6GLET"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

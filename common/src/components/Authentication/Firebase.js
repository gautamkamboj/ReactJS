


// firebase.js


import firebase from 'firebase/compat/app'; // Update import statement
import 'firebase/compat/auth'; // Update import statement
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD5BtxX9hcMzxncViugeGrrI8pi4uHQ97I",
    authDomain: "auth-abe83.firebaseapp.com",
    projectId: "auth-abe83",
    storageBucket: "auth-abe83.appspot.com",
    messagingSenderId: "255522023248",
    appId: "1:255522023248:web:cde673c65fd4efea9e2e55"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
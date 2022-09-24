import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
 
const firebaseConfig = {
    apiKey: "AIzaSyBIYGvmhnMOtaZSYpAw4MNz0JXjNANQnpI",
    authDomain: "vue-3-2022-e9e5f.firebaseapp.com",
    projectId: "vue-3-2022-e9e5f",
    storageBucket: "vue-3-2022-e9e5f.appspot.com",
    messagingSenderId: "531670785571",
    appId: "1:531670785571:web:8ddc2f47168f4410ee1b96"
};

initializeApp(firebaseConfig);
const auth = getAuth()

export { auth }
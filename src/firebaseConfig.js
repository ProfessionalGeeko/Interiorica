// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSmoP3hYiYhvVa-OWUvW61L3DNixuGbgw",
    authDomain: "interiorica-682b9.firebaseapp.com",
    projectId: "interiorica-682b9",
    storageBucket: "interiorica-682b9.appspot.com",
    messagingSenderId: "22979118782",
    appId: "1:22979118782:web:ca0169841f5086243280ef",
    measurementId: "G-FDTVP0LN0G"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);

// Initialize Realtime Database and get a reference to the service

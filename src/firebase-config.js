import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpnPVkM3rq0hnBpJQMJBb1ag3zGKEi-_o",
    authDomain: "mildt-13721.firebaseapp.com",
    databaseURL: "https://mildt-13721-default-rtdb.firebaseio.com",
    projectId: "mildt-13721",
    storageBucket: "mildt-13721.appspot.com",
    messagingSenderId: "526486426971",
    appId: "1:526486426971:web:ed8ff5a2c962cfbc01b67e",
    measurementId: "G-TVMHFF74CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const postsRef = collection(db, "posts");
export const productsRef = collection(db, "products");

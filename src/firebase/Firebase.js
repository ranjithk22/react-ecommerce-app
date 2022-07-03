import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBsB_92voGc5DaEY2g__c0bV6JADPLKjjg",
    authDomain: "industrial-fx-287011.firebaseapp.com",
    projectId: "industrial-fx-287011",
    storageBucket: "industrial-fx-287011.appspot.com",
    messagingSenderId: "21438605014",
    appId: "1:21438605014:web:be412d319e715ecc120b77",
    measurementId: "G-TT1562SHKC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()

// const analytics = getAnalytics(app);
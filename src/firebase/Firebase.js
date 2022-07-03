import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { FirebaseSetting } from './FirebaseSetting'

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: FirebaseSetting.apiKey,
    authDomain: FirebaseSetting.authDomain,
    projectId: FirebaseSetting.projectId,
    storageBucket: FirebaseSetting.storageBucket,
    messagingSenderId: FirebaseSetting.messagingSenderId,
    appId: FirebaseSetting.appId,
    measurementId: FirebaseSetting.measurementId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()

// const analytics = getAnalytics(app);
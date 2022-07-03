import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { FireBaseSettings } from './FireBaseSettings'

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: FireBaseSettings.apiKey,
    authDomain: FireBaseSettings.authDomain,
    projectId: FireBaseSettings.projectId,
    storageBucket: FireBaseSettings.storageBucket,
    messagingSenderId: FireBaseSettings.messagingSenderId,
    appId: FireBaseSettings.appId,
    measurementId: FireBaseSettings.measurementId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()

// const analytics = getAnalytics(app);
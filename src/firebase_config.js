// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { apiKey, appId, domain } from "./config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: domain,
    projectId: "ieee-website-1e2c8",
    storageBucket: "ieee-website-1e2c8.appspot.com",
    messagingSenderId: "441772544544",
    appId: appId,
    measurementId: "G-GJPKT242FR"
};

// Initialize Firebase
export { firebaseConfig };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
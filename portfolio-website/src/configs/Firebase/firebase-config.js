// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import CONST from "../../utils/constants";

// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: CONST.BASE_FIREBASE_API_KEY,
  authDomain: CONST.BASE_FIREBASE_AUTH_DOMAIN,
  projectId: CONST.BASE_FIREBASE_PROJECT_ID,
  storageBucket: CONST.BASE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: CONST.BASE_FIREBASE_MESSAGING_SENDER_ID,
  appId: CONST.BASE_FIREBASE_APP_ID,
  measurementId: CONST.BASE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;

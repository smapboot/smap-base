import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.OAUTH_FIREBASE_APIKEY,
  authDomain: process.env.OAUTH_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.OAUTH_FIREBASE_PROJECT_ID,
  storageBucket: process.env.OAUTH_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.OAUTH_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.OAUTH_FIREBASE_APP_ID,
  measurementId: process.env.OAUTH_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
let api;
try{
  api = getAuth(app);
}catch (err){}
export const auth = api || null;

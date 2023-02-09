import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.STARWARSINFO_APP_FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "task-starwars",
  storageBucket: "task-starwars.appspot.com",
  messagingSenderId: "177752591324",
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

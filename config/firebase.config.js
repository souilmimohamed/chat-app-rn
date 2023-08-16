import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYFRqgr4RzVPLUVsSzeOthQi3-RoTPtLA",
  authDomain: "chat-app-rn-2d0b3.firebaseapp.com",
  projectId: "chat-app-rn-2d0b3",
  storageBucket: "chat-app-rn-2d0b3.appspot.com",
  messagingSenderId: "178780471244",
  appId: "1:178780471244:web:bc91b0828733f5ce45e769",
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };

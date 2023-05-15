import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,

  // apiKey: "AIzaSyDO0WVyfjyQ3Y32lrRyS2iA8VFF9Gzl1uw",
  // authDomain: "next-todo-b6b2a.firebaseapp.com",
  // projectId: "next-todo-b6b2a",
  // storageBucket: "next-todo-b6b2a.appspot.com",
  // messagingSenderId: "178272733588",
  // appId: "1:178272733588:web:5f91fb577671085269e781",
};

const app = initializeApp(firebaseConfig);
// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }
export const auth = getAuth(app);
export const db = getFirestore(app);

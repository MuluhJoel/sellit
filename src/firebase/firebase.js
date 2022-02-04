import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASSfYu12YBWag0FXqnuzdcwk2JRvRo5DM",
  authDomain: "myproject-917f0.firebaseapp.com",
  projectId: "myproject-917f0",
  storageBucket: "myproject-917f0.appspot.com",
  messagingSenderId: "527597070049",
  appId: "1:527597070049:web:4fc1e2da9f5a083efaf9a0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

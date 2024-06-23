import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig= {
  apiKey: "AIzaSyCoNfonsoBK9yjzpx10UcDxTrSe39BO7w4",
  authDomain: "paperdragon-51249.firebaseapp.com",
  projectId: "paperdragon-51249",
  storageBucket: "paperdragon-51249.appspot.com",
  messagingSenderId: "479706820818",
  appId: "1:479706820818:web:10f1179885f7afc2d47d0b"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
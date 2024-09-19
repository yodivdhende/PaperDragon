// Import the functions you need from the SDKs you need
import { deleteApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
} from "$env/static/private"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID
};

// Initialize Firebase
let firebaseApp: FirebaseApp;
if (getApps().length) {
	firebaseApp = getApps()[0];
	deleteApp(firebaseApp);
}
firebaseApp = initializeApp(firebaseConfig);

export const fireStore = getFirestore(firebaseApp);
//TODO Remove after production relase
connectFirestoreEmulator(fireStore, '127.0.0.1', 8080);

// Import the functions you need from the SDKs you need
import { deleteApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.FIREBASE_API_KEY,
	authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.FIREBASE_APP_ID
};

// Initialize Firebase
let firebaseApp: FirebaseApp;
if (getApps().length) {
	firebaseApp = getApps()[0];
	deleteApp(firebaseApp);
}
firebaseApp = initializeApp(firebaseConfig);

export const firebaseStore = getFirestore(firebaseApp);

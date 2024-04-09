// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
	authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
	projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
	storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
	messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
	appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

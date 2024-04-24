import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
} from 'firebase/auth';
import {
	getFirestore,
	collection,
	addDoc,
	serverTimestamp,
	setDoc,
	doc,
} from 'firebase/firestore';
import app from './firebase.config.js';
import { toast } from 'react-toastify';

const auth = getAuth(app);
const db = getFirestore(app);

//Register User With Email and Password
const registerWithEmailAndPassword = async (data) => {
	const { displayName, email, password, phoneNumber } = data;
	try {
		// Create user with email and password
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);

		// Update full name in in user profile
		updateProfile(auth.currentUser, {
			displayName: displayName,
		});

		// get user information from firebase
		const user = userCredential.user;

		//get user timestamp from firebase Server
		const timestamp = serverTimestamp();

		// set user information in user data base
		await setDoc(doc(db, 'users', user.uid), {
			displayName: displayName,
			photoURL: '',
			providerId: 'local',
			email: email,
			phoneNumber: phoneNumber,
			timestamp: timestamp,
			about: '',
		});

		return user;
	} catch (error) {
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);
		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const userCredential = await signInWithPopup(auth, googleProvider);

		// Extract user data
		const user = userCredential.user;

		console.log(`User created successfully!!`);
		return userDocRef.path;
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async (data) => {
	const { email, password } = data;
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);

		const userInfo = userCredential.user;

		console.log(`User login successfully!!`);

		return userInfo;
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => {
	signOut(auth);
	console.log(`User logout successfully!!`);
};

const currentUser = () => {
	const currentUser = auth.currentUser;
	if (currentUser) {
		return currentUser;
	}
};

const updateUser = async (user) => {
	console.log(user);
	const { displayName, photoURL, email, phoneNumber } = user;
	try {
		updateProfile(auth.currentUser, {
			displayName: displayName,
			photoURL: photoURL,
			email: email,
			phoneNumber: phoneNumber,
		});
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// Handle error
		console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
	currentUser,
};

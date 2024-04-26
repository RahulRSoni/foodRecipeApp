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
	serverTimestamp,
	setDoc,
	doc,
	getDoc,
	updateDoc,
} from 'firebase/firestore';
import app from './firebase.config.js';
import { toast } from 'react-toastify';

const auth = getAuth(app);
const db = getFirestore(app);

//Register User With Email and Password
const registerWithEmailAndPassword = async (data) => {
	const { displayName, email, password } = data;
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
			phoneNumber: '',
			timestamp: timestamp,
			about: '',
		});

		const docRef = doc(db, 'users', user.uid);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			// docSnap.data() will be undefined in this case
			toast.error('No such document!');
		}
	} catch (error) {
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);
		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

//Register or Login User With Google
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const userCredential = await signInWithPopup(auth, googleProvider);

		// Extract user data
		const user = userCredential.user;

		//check user in data base
		const docRef = doc(db, 'users', user.uid);
		const docSnap = await getDoc(docRef);

		//get user timestamp from firebase Server
		const timestamp = serverTimestamp();

		if (!docSnap.exists()) {
			await setDoc(docRef, {
				displayName: user.displayName,
				photoURL: user.photoURL,
				providerId: user.providerId,
				email: user.email,
				phoneNumber: user.phoneNumber,
				timestamp: timestamp,
				about: '',
			});
		}

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			// docSnap.data() will be undefined in this case
			toast.error('No such document!');
		}
	} catch (error) {
		const errorCode = error.code;
		toast.error(errorCode);
	}
};

//Login User With Email and Password
const logInWithEmailAndPassword = async (data) => {
	const { email, password } = data;
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);

		const user = userCredential.user;

		return user;
	} catch (error) {
		const errorCode = error.code;
		toast.error(errorCode);
	}
};

const sendPasswordReset = async (data) => {
	const { email } = data;

	try {
		await sendPasswordResetEmail(auth, email);
	} catch (error) {
		const errorCode = error.code;
		toast.error(errorCode);
	}
};

const logout = () => {
	signOut(auth);
	toast.success('Your logged out successfully!!');
};

const currentUser = () => {
	const currentUser = auth.currentUser;
	return currentUser;
};

const updateUser = async (data) => {
	const { displayName, photoURL, about, phoneNumber } = data;
	try {
		await updateProfile(auth.currentUser, {
			displayName: displayName,
			photoURL: photoURL,
		});

		const docRef = doc(db, 'users', auth.currentUser.uid);

		await updateDoc(docRef, {
			displayName: displayName,
			photoURL: photoURL,
			about: about,
			phoneNumber: phoneNumber,
		});

		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			// docSnap.data() will be undefined in this case
			alert('No such document!');
		}
	} catch (error) {
		const errorCode = error.code;
		toast.error(errorCode);
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
	updateUser,
};

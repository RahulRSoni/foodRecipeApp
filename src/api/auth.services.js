import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';
import app from './firebase.config.js';

const auth = getAuth(app);

const db = getFirestore(app);

const registerWithEmailAndPassword = async (data) => {
	const { displayName, email, password, phoneNumber } = data;

	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);

		const user = userCredential.user;

		const orderCollection = collection(db, 'users');

		await addDoc(orderCollection, {
			uid: user.uid,
			name: displayName,
			phone: phoneNumber,
			authProvider: 'local',
			avatar: '',
			email: email,
		});

		console.log(`User created successfully!!`);
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// Handle error
		console.error(errorCode, errorMessage);
	}
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				phone: user.phoneNumber,
				authProvider: 'google',
				avatar: user.photoURL,
				email: user.email,
			});
			console.log(`User created successfully!!`);
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log(`User login successfully!!`);
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
};

const currentUser = () => {
	const auth = getAuth();
	const currentUser = auth.currentUser;
	if (currentUser) {
		console.log(currentUser);
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

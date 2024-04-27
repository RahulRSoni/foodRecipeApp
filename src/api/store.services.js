import {
	doc,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	serverTimestamp,
	where,
} from 'firebase/firestore';
import app from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { auth, currentUser } from './auth.services.js';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
import { toast } from 'react-toastify';

const db = getFirestore(app);
const storage = getStorage(app);

const createRecipes = async (data) => {
	try {
		const user = currentUser();

		const docRef = doc(db, 'users', user.uid);
		const docSnap = await getDoc(docRef);

		const timestamp = serverTimestamp();

		if (docSnap.exists()) {
			const userInfo = docSnap.data();
			const orderCollection = collection(db, 'recipes');

			const documentRef = await addDoc(orderCollection, {
				recipe: data,
				user: userInfo,
				timestamp,
			});

			return documentRef;
		} else {
			console.log('Error: user not found or login');
		}
	} catch (error) {
		// const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

const storeImages = async (file, progressCallback) => {
	try {
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed', (snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			progressCallback(Math.round(progress));
		});

		// Await uploadTask to ensure it's completed
		await uploadTask;

		// Once upload is complete, get the download URL
		const downloadURL = getDownloadURL(uploadTask.snapshot.ref);
		return downloadURL;
	} catch (error) {
		// If any error occurs during the process, catch it and throw it
		throw error;
	}
};

const getRecipe = async () => {
	const user = auth.currentUser.user;

	const recipeRef = collection(db, 'recipes');
	const q = query(
		recipeRef,
		where('userRef', '==', user.uid),
		orderBy('timestamp', 'desc'),
	);
	const querySnap = await getDocs(q);
	const recipe = [];
	querySnap.array.forEach((doc) => {
		return recipe.push({
			id: doc.id,
			data: doc.data,
		});
	});
	return recipe;
};

export { createRecipes, storeImages, getRecipe };

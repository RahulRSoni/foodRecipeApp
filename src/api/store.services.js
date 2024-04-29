import {
	FieldPath,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getDocsFromServer,
	getFirestore,
	orderBy,
	query,
	serverTimestamp,
	where,
} from 'firebase/firestore';
import app from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const createRecipes = async (data) => {
	try {
		const user = auth.currentUser;

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
		const errorCode = error.code;
		const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
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

const getRecipe = async (userEmail) => {
	const q = query(
		collection(db, 'recipes'),
		where('user.email', '==', userEmail),
		orderBy('timestamp', 'desc'),
	);

	try {
		const querySnapshot = await getDocs(q);
		const combinedRecipes = [];
		const recipes = [];
		const recipeId = [];
		querySnapshot.forEach((doc) => {
			const recipeData = doc.data();
			const recipeId = doc.id;

			// Combine recipe data with ID
			const combinedRecipe = {
				id: recipeId,
				...recipeData,
			};

			combinedRecipes.push(combinedRecipe);
		});

		return combinedRecipes;
	} catch (error) {
		toast.error('Error getting recipes:', error);
		throw error;
	}
};

const deleteRecipe = async (recipeId, data) => {
	try {
		deleteDoc(doc(db, 'recipes', recipeId));
		const updatedRecipe = data.filter((recipe) => recipe.id === recipeId);

		return updatedRecipe;
	} catch (error) {
		toast.error('Error getting recipes:', error);
		throw error;
	}
};

export { createRecipes, storeImages, getRecipe, deleteRecipe };

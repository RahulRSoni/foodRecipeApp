import {
	deleteDoc,
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
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
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
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

const deleteRecipe = async (recipe) => {
	try {
		await deleteDoc(doc(db, 'recipes', recipe.id));
		return recipe.id; // Return the ID of the deleted recipe
	} catch (error) {
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

const editRecipe = async (paramsId) => {
	try {
		const docRef = doc(db, 'recipes', paramsId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const recipe = docSnap.data();
			return recipe;
		}
	} catch (error) {
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

export { createRecipes, storeImages, getRecipe, deleteRecipe, editRecipe };

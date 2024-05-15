import {
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	serverTimestamp,
	updateDoc,
	where,
} from 'firebase/firestore';
import app from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import {
	getDownloadURL,
	getStorage,
	listAll,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';

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

const getUserRecipe = async (userEmail) => {
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

const getAllRecipe = async () => {
	const q = query(collection(db, 'recipes'), orderBy('timestamp', 'desc'));

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

const getIdWiseRecipeData = async (paramsId) => {
	try {
		const docRef = doc(db, 'recipes', paramsId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const recipe = docSnap.data();

			return recipe;
		}
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

const updateRecipe = async (paramsId, data) => {
	try {
		const docRef = doc(db, 'recipes', paramsId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			await updateDoc(docRef, { recipe: data });
			const updatedDocSnap = await getDoc(docRef);
			const updatedRecipe = updatedDocSnap.data();
			return updatedRecipe;
		} else {
			toast.error('Document does not exist');
			// Handle the case where the document doesn't exist
			return null;
		}
	} catch (error) {
		// const errorCode = error.code;
		const errorMessage = error.message;

		// Handle error
		toast.error(errorMessage);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
		// return null;
	}
};

const getAllImages = async () => {
	try {
		// Reference to the default storage bucket
		const listRef = ref(storage);

		// List all items in the default storage bucket
		const res = await listAll(listRef);

		const urls = await Promise.all(
			res.items.map(async (itemRef) => {
				try {
					const url = await getDownloadURL(itemRef);
					return url;
				} catch (error) {
					// console.error('Error getting download URL:', error);
					return null;
				}
			}),
		);

		// Filter out null values (errors)
		const filteredUrls = urls.filter((url) => url !== null);

		// Now you have an array of image URLs
		return filteredUrls;
	} catch (error) {
		// Uh-oh, an error occurred!
		// console.log(error);
		// Handle error
		toast.error(error.code);
	}
};

const addTestimonial = async (data) => {
	try {
		const user = auth.currentUser;

		const docRef = doc(db, 'users', user.uid);
		const docSnap = await getDoc(docRef);

		const timestamp = serverTimestamp();

		if (docSnap.exists()) {
			const userInfo = docSnap.data();
			const orderCollection = collection(db, 'testimonials');

			const documentRef = await addDoc(orderCollection, {
				testimonial: data,
				user: userInfo,
				timestamp,
			});

			return documentRef;
		} else {
			toast.error('Error: user not found or login');
		}
	} catch (error) {
		const errorCode = error.code;
		// const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		// console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

const getAllTestimonial = async () => {
	const q = query(collection(db, 'testimonials'), orderBy('timestamp', 'desc'));

	try {
		const querySnapshot = await getDocs(q);
		const combinedTestimonials = [];
		const testimonial = [];
		const testimonialId = [];
		querySnapshot.forEach((doc) => {
			const testimonialData = doc.data();
			const testimonialId = doc.id;

			// Combine recipe data with ID
			const combinedTestimonial = {
				id: testimonialId,
				...testimonialData,
			};

			combinedTestimonials.push(combinedTestimonial);
		});

		return combinedTestimonials;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		// Handle error
		toast.error(errorCode);

		console.log('errorCode:', errorCode, 'errorMessage:', errorMessage);
	}
};

export {
	createRecipes,
	storeImages,
	getUserRecipe,
	deleteRecipe,
	getIdWiseRecipeData,
	updateRecipe,
	getAllRecipe,
	getAllImages,
	addTestimonial,
	getAllTestimonial,
};

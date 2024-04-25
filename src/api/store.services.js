import { getFirestore, snapshotEqual } from 'firebase/firestore';
import app from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { currentUser } from './auth.services.js';
import {
	deleteObject,
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';

const db = getFirestore(app);
const storage = getStorage(app);

const createRecipes = async (data) => {
	try {
		const user = currentUser();
		console.log(user);
		if (user) {
			const orderCollection = collection(db, 'recipes');

			const userInfo = {
				uid: user.uid,
				name: user.displayName,
				email: user.email,
				phoneNumber: user.phoneNumber,
				avatar: user.photoURL,
			};

			const recipe = await addDoc(orderCollection, {
				recipe: data,
				user: userInfo,
			});

			console.log('Recipe posted successfully!!');

			return recipe.id;
		} else {
			console.log('Error: user not found or login');
		}
	} catch (error) {
		console.error('Error adding document: ', error);
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

const deleteImage = async (imagePath) => {
	try {
		// Create a reference to the file to delete
		const imageRef = ref(storage, imagePath);

		// Delete the file
		await deleteObject(imageRef)
			.then(() => {
				// File deleted successfully
				console.log('Image deleted successfully from Firebase Storage:');
			})
			.catch((error) => {
				// Uh-oh, an error occurred!
				console.error(
					'Error deleting image from Firebase deleteObject:',
					error,
				);
			});
	} catch (error) {
		console.error('Error deleting image from Firebase Storage:', error);
	}
};

export { createRecipes, storeImages, deleteImage };

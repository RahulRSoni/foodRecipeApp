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
		const orderCollection = collection(db, 'recipes');

		const recipe = await addDoc(orderCollection, {
			recipe: data,
			userinfo: user,
		});

		console.log(
			'User created successfully!!, Document written with ID: ',
			recipe.id,
		);

		return recipe.id;
	} catch (error) {
		console.error('Error adding document: ', error);
	}
};

const storeImages = async (file, progressCallback) => {
	return new Promise((resolve, reject) => {
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				progressCallback(Math.round(progress));
			},
			(error) => reject(error),
			() =>
				getDownloadURL(uploadTask.snapshot.ref).then((downLoadURL) =>
					resolve(downLoadURL),
				),
		);
	});
};

const deleteImage = async (imagePath) => {
	console.log(imagePath);
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

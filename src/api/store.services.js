import { getFirestore } from 'firebase/firestore';
import app from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { currentUser } from './auth.services.js';
import {
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

const handleFileUpload = (file, progressCallback, urlCallback) => {
	try {
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

				// Call the progress callback with the progress value
				progressCallback(Math.round(progress));
			},
			(error) => {
				console.error('Error uploading file: ', error);
				// Call the progress callback with an error indicator
				progressCallback(-1);
			},
			() => {
				// Once upload is complete, get the download URL
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						// Call the URL callback with the URL value
						urlCallback(downloadURL);
					})
					.catch((error) => {
						console.error('Error getting download URL: ', error);
						// Call the URL callback with an error indicator
						urlCallback(null);
					});
			},
		);
	} catch (error) {
		console.error('Error adding document: ', error);
		// Call the progress callback with an error indicator if needed
		progressCallback(-1);
	}
};

export { createRecipes, handleFileUpload };

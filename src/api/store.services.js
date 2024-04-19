import { getFirestore } from 'firebase/firestore';
import app from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { currentUser } from './auth.services.js';

const db = getFirestore(app);

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

export { createRecipes };

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default CreateUser = async (auth, email, password) => {
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			navigate('/login');
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ..
		});
};

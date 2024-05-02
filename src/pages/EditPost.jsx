import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm/PostForm';
import Spinner from '../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { editRecipe } from '../api/store.services';
import { toast } from 'react-toastify';

function EditPost() {
	const [loading, setLoading] = useState(false);
	const [recipes, setRecipes] = useState(null);
	const params = useParams();
	const paramsId = params.recipeId;

	useEffect(() => {
		try {
			if (paramsId) {
				setLoading(true);

				editRecipe(paramsId)
					.then((recipeData) => {
						setRecipes(recipeData);
						setLoading(false);
					})
					.catch((error) => {
						toast.error('Error fetching recipes:', error);
						setLoading(false);
					});
			}
		} catch (error) {}
	}, [paramsId]);

	return (
		<div className='py-8'>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1502741282025-a9c6a20aa697?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>
			{loading ? <Spinner /> : <PostForm post={recipes && recipes.recipe} />}
		</div>
	);
}

export default EditPost;

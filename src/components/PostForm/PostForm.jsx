// PostForm.js
import React from 'react';
import { Button } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { CommentBox } from '../RecipeFrom/CommentBox';

const PostForm = ({ post }) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const submit = async (data) => {
		try {
			// Log the form data to debug
			console.log('Form Data:', data);
			// You can proceed with further processing here
		} catch (error) {
			console.error('Error occurred:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<div className='flex flex-col justify-center items-center p-10 mt-8 '>
				<div className=' mb-4 flex flex-col justify-center gap-5 bg-blue-gray-50 backdrop-blur-sm py-8 rounded-lg px-6'>
					<CommentBox
						control={control}
						register={register}
						errors={errors}
					/>

					<Button
						size='sm'
						type='submit'
						className=' bg-green-500'>
						{post ? 'Update' : 'Submit'}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default PostForm;

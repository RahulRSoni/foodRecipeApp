import React, { useState, useRef, useEffect } from 'react';
import {
	Textarea,
	Tooltip,
	IconButton,
	Typography,
	Button,
} from '@material-tailwind/react';

export function CommentBox({ control, register, onPostsChange }) {
	const [posts, setPosts] = useState([{ text: '', image: null }]);
	const [stepCount, setStepCount] = useState(1);

	useEffect(() => {
		// Register each textarea individually
		posts.forEach((_, index) => {
			register(`commentBox[${index}].text`);
		});
	}, [register, posts]);

	const fileInputRefs = useRef([]);

	const handleAddMorePosts = () => {
		if (posts.length < 6) {
			setPosts((prevPosts) => [...prevPosts, { text: '', image: null }]);
			setStepCount((prevStep) => prevStep + 1); // Increase step count
		}
	};

	const handleDeletePost = (index) => {
		if (posts.length > 1) {
			setPosts((prevPosts) => {
				const newPosts = [...prevPosts];
				newPosts.splice(index, 1);
				return newPosts;
			});
		}
	};

	const handleAddImage = (index) => {
		fileInputRefs.current[index].click(); // Trigger file input click
	};

	const handleFileInputChange = (index, e) => {
		const file = e.target.files[0];
		if (file) {
			// Handle file upload here
			setPosts((prevPosts) => {
				const newPosts = [...prevPosts];
				newPosts[index].image = file;
				return newPosts;
			});
		}
	};

	const handleTextChange = (index, e) => {
		const newText = e.target.value;
		setPosts((prevPosts) => {
			const newPosts = [...prevPosts];
			newPosts[index] = { ...newPosts[index], text: newText };
			return newPosts;
		});
		onPostsChange(newPosts); // Pass the updated posts array to the parent component
	};

	return (
		<>
			{posts.map((post, index) => (
				<div
					key={index}
					className='flex w-full gap-5'>
					<div className='w-full'>
						{/* Textarea for entering text content */}
						<Textarea
							label={`Step-${stepCount + index}`}
							rows={3}
							value={post.text}
							onChange={(e) => handleTextChange(index, e)}
						/>
					</div>
					<div className='flex flex-col justify-evenly items-center'>
						{/* Button to add image */}
						<Tooltip
							placement='top'
							className='border border-blue-gray-50 bg-white shadow-xl shadow-black/10'
							content={
								<Typography
									color='blue-gray'
									className='font-medium font-serif'>
									Add Image
								</Typography>
							}>
							<IconButton
								variant='text'
								color='blue-gray'
								size='sm'
								onClick={() => handleAddImage(index)}
								disabled={post.image !== null}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
									/>
								</svg>
							</IconButton>
						</Tooltip>
						{/* Button to delete post */}
						<Tooltip
							placement='top'
							className='border border-blue-gray-50 bg-white shadow-xl shadow-black/10'
							content={
								<Typography
									color='blue-gray'
									className='font-medium font-serif'>
									Remove
								</Typography>
							}>
							<IconButton
								variant='text'
								color='red'
								size='sm'
								onClick={() => handleDeletePost(index)}
								disabled={posts.length === 1}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
									/>
								</svg>
							</IconButton>
						</Tooltip>
					</div>
					{/* Hidden file input for image upload */}
					<input
						type='file'
						ref={(ref) => (fileInputRefs.current[index] = ref)}
						style={{ display: 'none' }}
						onChange={(e) => handleFileInputChange(index, e)}
					/>
				</div>
			))}
			{/* Button to add more posts */}
			<Tooltip
				placement='top'
				className='border border-blue-gray-50 bg-white shadow-xl shadow-black/10'
				content={
					<Typography
						color='blue-gray'
						className='font-medium font-serif'>
						Add More
					</Typography>
				}>
				<Button
					variant='text'
					onClick={handleAddMorePosts}
					disabled={posts.length === 6}
					color='green'
					size='sm'
					className='float-right'>
					{' '}
					Add More
				</Button>
			</Tooltip>
		</>
	);
}

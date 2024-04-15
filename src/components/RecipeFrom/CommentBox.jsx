import React, { useState, useRef, useEffect } from 'react';
import {
	Textarea,
	Tooltip,
	IconButton,
	Typography,
	Button,
} from '@material-tailwind/react';

export function CommentBox({ control, register }) {
	const [posts, setPosts] = useState([
		{ text: '', image: null },
		{ text: '', image: null },
	]);
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
								{/* Add your SVG icon here */}
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
								{/* Add your SVG icon here */}
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
					Add More
				</Button>
			</Tooltip>
		</>
	);
}

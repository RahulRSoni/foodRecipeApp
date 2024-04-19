// CommentBox.js
import React, { useState, useRef, useEffect } from 'react';
import {
	Textarea,
	Tooltip,
	IconButton,
	Typography,
	Button,
} from '@material-tailwind/react';
import { FcAddImage } from 'react-icons/fc';

import { FcAddImage } from 'react-icons/fc';

export function CommentBox({ control, register }) {
	const [posts, setPosts] = useState([{ text: '', image: null }]);
	const [stepCount, setStepCount] = useState(1);

	const fileInputRefs = useRef([]);

	useEffect(() => {
		fileInputRefs.current = [React.createRef()];
	}, []);

	const handleAddMorePosts = () => {
		if (posts.length < 6) {
			setPosts((prevPosts) => [...prevPosts, { text: '', image: null }]);
			setStepCount((prevStep) => prevStep + 0); // Increment step count

			// Update fileInputRefs to include the new file input element
			fileInputRefs.current = [...fileInputRefs.current, React.createRef()];
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
		if (fileInputRefs.current[index] || fileInputRefs.current[index].current) {
			setPosts((prevPosts) => {
				const newPosts = [...prevPosts];
				newPosts[index].image = null; // Reset the image to null
				return newPosts;
			});
			fileInputRefs.current[index].current.click(); // Trigger file input click
		}
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
						<Textarea
							label={`Step-${stepCount}`}
							name={`commentBox[${index}].text`}
							rows={3}
							onChange={(e) => handleTextChange(index, e)}
							{...register(`commentBox[${index}].text`)}
						/>
					</div>
					<div className='flex flex-col justify-evenly items-center'>
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
							<Button
								variant='text'
								color='blue-gray'
								name={`commentBox[${index}].image`}
								size='sm'
								onClick={() => handleAddImage(index)}
								disabled={post.image !== null}>
								<FcAddImage className='h-6 w-auto' />
<<<<<<< HEAD
							</Button>
=======
							</IconButton>
>>>>>>> 807330492f20f1458ca2da03300f3c055ff27a25
						</Tooltip>
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
								Remove
							</IconButton>
						</Tooltip>
					</div>
					<input
						type='file'
<<<<<<< HEAD
						ref={fileInputRefs.current[index]}
=======
						ref={(ref) => (fileInputRefs.current[index] = ref)} // Assign ref properly
>>>>>>> 807330492f20f1458ca2da03300f3c055ff27a25
						style={{ display: 'none' }}
						accept='image/png, image/jpg, image/jpeg, image/gif'
						onChange={(e) => handleFileInputChange(index, e)}
						{...register(`commentBox[${index}].image`)}
					/>
				</div>
			))}
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

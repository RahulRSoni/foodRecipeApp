import React, { useState, useEffect, useRef } from 'react';
import {
	Textarea,
	Tooltip,
	Button,
	IconButton,
	Typography,
} from '@material-tailwind/react';
import { FcAddImage } from 'react-icons/fc';

export function CommentBox({ control, register }) {
	const [posts, setPosts] = useState([{ text: '', image: null }]);
	const [stepCount, setStepCount] = useState(1);
	const fileInputRefs = useRef([]);

	useEffect(() => {
		fileInputRefs.current = posts.map(() => React.createRef());
	}, [posts]);

	const handleAddMorePosts = () => {
		if (posts.length < 6) {
			setPosts((prevPosts) => [...prevPosts, { text: '', image: null }]);
			setStepCount((prevStep) => prevStep + 1);
			fileInputRefs.current.push(React.createRef());
		}
	};

	const handleDeletePost = (index) => {
		if (posts.length > 1) {
			setPosts((prevPosts) => {
				const newPosts = [...prevPosts];
				newPosts.splice(index, 1);
				return newPosts;
			});
			fileInputRefs.current.splice(index, 1);
		}
	};

	const handleFileInputChange = (index, e) => {
		const file = e.target.files[0];
		if (file) {
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
							label={`Step-${stepCount + index}`}
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
							<label htmlFor={`file-input-${index}`}>
								<IconButton
									variant='text'
									color='blue-gray'
									size='sm'
									disabled={post.image !== null}>
									Add image
								</IconButton>
							</label>
						</Tooltip>
						<input
							type='file'
							id={`file-input-${index}`}
							ref={fileInputRefs.current[index]}
							accept='image/png, image/jpg, image/jpeg, image/gif'
							onChange={(e) => handleFileInputChange(index, e)}
							{...register(`commentBox[${index}].image`)}
							
						/>
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

import React, { useState, useEffect, useRef } from 'react';
import {
	Textarea,
	Tooltip,
	Button,
	IconButton,
	Typography,
} from '@material-tailwind/react';
import { FcFullTrash } from 'react-icons/fc';

export function CommentBox({ control, register }) {
	const [posts, setPosts] = useState([{ text: '' }]);
	const [stepCount, setStepCount] = useState(1);

	const fileInputRefs = useRef([]);

	const handleAddMorePosts = () => {
		if (posts.length < 6) {
			setPosts((prevPosts) => [...prevPosts, { text: '' }]);
			setStepCount((prevStep) => prevStep + 0);
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

	return (
		<>
			{posts.map((_, index) => (
				<div
					key={index}
					className='flex w-full gap-5'>
					<div className='w-full'>
						<Textarea
							label={`Step-${stepCount + index}`}
							name={`commentBox[${index}].text`}
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
									Remove
								</Typography>
							}>
							<IconButton
								variant='text'
								color='red'
								size='sm'
								onClick={() => handleDeletePost(index)}
								disabled={posts.length === 1}>
								<FcFullTrash className='w-6 h-6' />
							</IconButton>
						</Tooltip>
					</div>
				</div>
			))}
			<Button
				variant='text'
				onClick={handleAddMorePosts}
				disabled={posts.length === 6}
				color='green'
				size='sm'
				className='float-right'>
				Add More
			</Button>
		</>
	);
}

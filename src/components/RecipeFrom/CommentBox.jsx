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
					<Tooltip
						placement='bottom'
						className='border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10'
						content={
							<div className='w-full'>
								<Typography
									color='blue-gray'
									className='font-medium font-serif '>
									Recipe making steps(6 x each 300 word)
								</Typography>
								<ol>
									<li>
										<Typography
											variant='lead'
											color='blue-gray'
											className='text-sm opacity-80'>
											Step 1 ........
										</Typography>
									</li>
									<li>
										<Typography
											variant='lead'
											color='blue-gray'
											className='text-sm opacity-80'>
											Step 2 ........
										</Typography>
									</li>
									<li>
										<Typography
											variant='lead'
											color='blue-gray'
											className='text-sm opacity-80'>
											Step 3 ........
										</Typography>
									</li>
									<li>
										<Typography
											variant='lead'
											color='blue-gray'
											className='text-sm opacity-80'>
											Step 4 ........
										</Typography>
									</li>
									<li>
										<Typography
											variant='lead'
											color='blue-gray'
											className='text-sm opacity-80'>
											Step 5 ........
										</Typography>
									</li>
									<li>
										<Typography
											variant='lead'
											color='blue-gray'
											className='text-sm opacity-80'>
											Step 6 ........
										</Typography>
									</li>
								</ol>
							</div>
						}>
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
								d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
							/>
						</svg>
					</Tooltip>
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

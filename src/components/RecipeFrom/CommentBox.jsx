import React, { useState, useRef } from 'react';
import {
	Textarea,
	Tooltip,
	IconButton,
	Typography,
} from '@material-tailwind/react';

export function CommentBox() {
	const [postCount, setPostCount] = useState(1);
	const [imageAddedStates, setImageAddedStates] = useState([false]);
	const [stepCount, setStepCount] = useState(1);

	const fileInputRefs = useRef([]);

	const handleAddMorePosts = () => {
		if (postCount < 6) {
			setPostCount((prevCount) => prevCount + 1);
			setStepCount((prevStep) => prevStep + 0); // Increase by 3 for each new set of posts
			setImageAddedStates((prevStates) => [...prevStates, false]);
		}
	};

	const handleDeletePost = (index) => {
		if (postCount > 1) {
			setPostCount((prevCount) => prevCount - 1);
			setImageAddedStates((prevStates) => {
				const newStates = [...prevStates];
				newStates.splice(index, 1);
				return newStates;
			});
		}
	};

	const handleAddImage = (index) => {
		fileInputRefs.current[index].click();
	};

	const handleFileInputChange = (index, e) => {
		const file = e.target.files[0];
		if (file) {
			setImageAddedStates((prevStates) => {
				const newStates = [...prevStates];
				newStates[index] = true;
				return newStates;
			});
		}
	};

	return (
		<>
			{Array.from({ length: postCount }).map((_, index) => (
				<div
					key={index}
					className='flex w-full gap-5'>
					<div className='w-full '>
						<Typography
							as='h5'
							className='font-semibold'>
							{/* Calculate step count based on index */}
						</Typography>
						<Textarea
							label={`Step-${stepCount + index * 1}`}
							rows={3}
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
							<IconButton
								variant='text'
								color='blue-gray'
								size='sm'
								onClick={() => handleAddImage(index)}
								disabled={imageAddedStates[index]}>
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
								disabled={postCount === 1}>
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
							<IconButton
								variant='text'
								onClick={handleAddMorePosts}
								disabled={postCount === 6}
								color='green'
								size='sm'>
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
										d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z'
									/>
								</svg>
							</IconButton>
						</Tooltip>
						<input
							type='file'
							ref={(ref) => (fileInputRefs.current[index] = ref)}
							style={{ display: 'none' }}
							onChange={(e) => handleFileInputChange(index, e)}
						/>
					</div>
				</div>
			))}
		</>
	);
}

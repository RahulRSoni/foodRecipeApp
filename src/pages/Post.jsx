import React from 'react';
import { Typography } from '@material-tailwind/react';

export default function PostPage() {
	return (
		<div className='px-4 py-20 h-full w-full'>
			<div className='grid lg:grid-cols-6 p-2'>
				<div className='lg:col-span-2 px-2 border-l-blue-gray-400 lg:border-l border-t justify-items-left h-full'>
					<img
						alt='demo'
						src='https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className='w-4/12 fixed overflow-y-auto px-4 h-5/6 object-cover'
					/>
				</div>
				<div className='lg:col-span-4 px-14'>
					<Typography variant='h2'>About Me</Typography>
					<div className='py-6 border-b-2 border-gray-400'>
						<Typography
							variant='h3'
							className='py-4'>
							Our Story
						</Typography>
						<Typography
							variant='paragraph'
							className='text-lg font-light'>
							<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
								A
							</span>
							t Dad's Kitchen, we believe that some of life's best moments
							happen around the dining table. It all started with my own dad,
							who instilled in me a love for cooking from a young age. From
							baking cookies on rainy afternoons to mastering the art of the
							perfect barbecue, my dad's kitchen was always the heart of our
							home.
						</Typography>
					</div>
					{/* Other sections */}
					<Typography variant='h2'>About Me</Typography>
					<div className='py-6 border-b-2 border-gray-300'>
						<Typography
							variant='h3'
							className='py-4'>
							Our Story
						</Typography>
						<Typography
							variant='paragraph'
							className='text-lg font-light'>
							<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
								A
							</span>
							t Dad's Kitchen, we believe that some of life's best moments
							happen around the dining table. It all started with my own dad,
							who instilled in me a love for cooking from a young age. From
							baking cookies on rainy afternoons to mastering the art of the
							perfect barbecue, my dad's kitchen was always the heart of our
							home.
						</Typography>
					</div>
					{/* Other sections */}
					<Typography variant='h2'>About Me</Typography>
					<div className='py-6 border-b-2 border-gray-300'>
						<Typography
							variant='h3'
							className='py-4'>
							Our Story
						</Typography>
						<Typography
							variant='paragraph'
							className='text-lg font-light'>
							<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
								A
							</span>
							t Dad's Kitchen, we believe that some of life's best moments
							happen around the dining table. It all started with my own dad,
							who instilled in me a love for cooking from a young age. From
							baking cookies on rainy afternoons to mastering the art of the
							perfect barbecue, my dad's kitchen was always the heart of our
							home.
						</Typography>
					</div>
					{/* Other sections */}
					<Typography variant='h2'>About Me</Typography>
					<div className='py-6 border-b-2 border-gray-300'>
						<Typography
							variant='h3'
							className='py-4'>
							Our Story
						</Typography>
						<Typography
							variant='paragraph'
							className='text-lg font-light'>
							<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
								A
							</span>
							t Dad's Kitchen, we believe that some of life's best moments
							happen around the dining table. It all started with my own dad,
							who instilled in me a love for cooking from a young age. From
							baking cookies on rainy afternoons to mastering the art of the
							perfect barbecue, my dad's kitchen was always the heart of our
							home.
						</Typography>
					</div>
					{/* Other sections */}
				</div>
			</div>
		</div>
	);
}

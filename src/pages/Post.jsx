import React, { useState } from 'react';
import AboutCard from '../components/Card/AboutCard.jsx';
import { Typography } from '@material-tailwind/react';

export default function About() {
	return (
		<div className='px-4 py-20 h-full w-full'>
			<div className='grid lg:grid-cols-6 p-2'>
				<div className='grid lg:col-span-2 px-2 border-l-blue-gray-100 lg:border-l border-t justify-items-center fixed left-0 overflow-y-auto h-full'>
					<img
						alt='demo'
						src='https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className='w-4/12 '
					/>
					<div className='grid lg:col-span-4 justify-items-center overflow-y-auto h-full'></div>
					<div className='px-6 '>
						<Typography variant='h2'>About Me</Typography>
						<div className='py-6 border-b-2 border-gray-300'>
							<Typography
								variant='h3'
								className=' py-4'>
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
						<div className='py-6 '>
							<Typography
								variant='h3'
								className='py-4'>
								What We Offer
							</Typography>
						</div>

						<div className='py-6 border-b-2 border-gray-300 '>
							<Typography
								variant='h3'
								className='py-4'>
								Our Mission
							</Typography>
							<Typography
								variant='paragraph'
								className='text-lg font-light'>
								<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
									O
								</span>
								ur mission at Dad's Kitchen is simple: to inspire families to
								come together, create memories, and share delicious meals. We're
								passionate about preserving family recipes, celebrating culinary
								traditions, and passing down the joy of cooking from one
								generation to the next.
							</Typography>
						</div>
						<div className='py-6 border-b-2 border-gray-300 '>
							<Typography
								variant='h3'
								className='py-4'>
								Get Involved
							</Typography>
							<Typography
								variant='paragraph'
								className='text-lg font-light'>
								<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
									W
								</span>
								hether you're a seasoned chef or a novice in the kitchen,
								there's a place for you at Dad's Kitchen. Join us on our
								culinary journey and let's make memories together, one delicious
								dish at a time.
							</Typography>
						</div>
						<div className='py-6  '>
							<Typography
								variant='h3'
								className='py-4'>
								Contact Us
							</Typography>
							<Typography
								variant='paragraph'
								className='text-lg font-light'>
								<span className='font-thin text-2xl text-blue-gray-300 text-pretty translate-x-2'>
									H
								</span>
								ave a question, suggestion, or just want to say hello? We'd love
								to hear from you! Get in touch{' '}
								<Typography
									as='button'
									className='text-teal-500 hover:text-teal-700/50'>
									here.
								</Typography>
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

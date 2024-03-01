import React from 'react';
import { CiYoutube, CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { PiPinterestLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-tailwind/react';
import { TestimonialCard } from './TestimonialCard';
import { NewsLetterCard } from './NewsLetterCard';

function AboutCard() {
	return (
		<div className='w-full flex flex-col  items-center p-4 '>
			<div className='border border-blue-gray-200 rounded-full border-dashed'>
				<img
					className='h-96 w-96 rounded-full object-cover object-center p-2'
					src='https://images.unsplash.com/photo-1708860219707-f9e981be62c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='nature image'
				/>
			</div>
			<div className='flex flex-col justify-center items-center p-6 font-serif text-gray-800'>
				<Typography
					variant='h2'
					className='font-semibold '>
					Dad's Kitchen
				</Typography>
				<Typography variant='paragraph'>
					<span className='font-thin text-xl text-blue-gray-300 text-pretty translate-x-2'>
						W
					</span>
					here every recipe tells a story and every meal is made with love.
					Don't hesitate to come for say a small "hello!"
				</Typography>
			</div>
			<div className='flex gap-3 p-2'>
				<Typography href='#'>
					<CiFacebook className='h-10 w-10 hover:fill-teal-200 transition-all duration-500' />
				</Typography>
				<Typography href='#'>
					<CiInstagram className='h-10 w-10 hover:fill-teal-200 transition-all duration-500' />
				</Typography>
				<Typography href='#'>
					<CiYoutube className='h-10 w-10 hover:fill-teal-200 transition-all duration-500' />
				</Typography>
				<Link to='#'>
					<CiTwitter className='h-10 w-10 hover:fill-teal-200 transition-all duration-500' />
				</Link>
				<Typography href='#'>
					<PiPinterestLogo className='h-10 w-10 hover:fill-teal-200 transition-all duration-500' />
				</Typography>
			</div>

			<div className='py-8 w-max'>
				<Button
					color='teal'
					size='lg'>
					contact us
				</Button>
			</div>
			<div className='flex flex-col gap-3 py-4'>
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
			</div>
			<div className=' py-16'>
				<NewsLetterCard />
			</div>
		</div>
	);
}

export default AboutCard;

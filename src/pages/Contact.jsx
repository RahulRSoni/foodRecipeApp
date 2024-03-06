import React from 'react';
import { ContactCard } from '../components/Card/ContactCard';
import { Typography } from '@material-tailwind/react';
import { NewsLetterCard } from '../components/Card/NewsLetterCard';

export default function Contact() {
	return (
		<div className='flex flex-col  justify-center items-center px-5 py-10 md:py-14 h-full w-full '>
			<div className='flex flex-col md:flex-row shadow-xl shadow-blue-gray-100'>
				<div className='flex flex-col items-center w-full px-4 '>
					<Typography
						variant='h2'
						textGradient
						className='relative top-10 text-7xl font-bold text-blue-gray-300 font-serif'>
						Contact Me
					</Typography>
					<img
						src='https://images.unsplash.com/photo-1612878010854-1250dfc5000a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className=' object-cover object-center w-[45rem]'
						alt='logo'
					/>
				</div>
				<div className='flex flex-col h-full w-full px-6 pt-20 '>
					<div className=' h-full w-full pl-4'>
						<Typography
							variant='h2'
							className='font-serif'>
							Get in Touch
						</Typography>
					</div>
					<div className='h-full w-full pl-4'>
						<Typography
							variant='lead'
							className='py-4 '>
							Have a question, suggestion, or just want to say hello?
							<br />
							We'd love to hear from you!
							<br />
							Feel free to reach out using the contact information below.
						</Typography>
					</div>
					<div className='h-full py-10'>
						<ContactCard />
					</div>
				</div>
			</div>
			<div className='w-full xl:px-40 pt-20'>
				<NewsLetterCard />
			</div>
		</div>
	);
}

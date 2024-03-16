import React, { useState } from 'react';
import AboutCard from '../components/Card/AboutCard.jsx';
import { Typography } from '@material-tailwind/react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';

const data = [
	{
		imageLink:
			'https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imageLink:
			'https://plus.unsplash.com/premium_photo-1669727914928-afbd5ccb8fd8?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imageLink:
			'https://plus.unsplash.com/premium_photo-1676313449554-e12b4754957b?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const items = [
	{
		imageLink:
			'https://images.unsplash.com/photo-1479796099910-b137a80acde4?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imageLink:
			'https://images.unsplash.com/photo-1568915020940-3d5a5c50e220?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const item2 = [
	{
		imgelink:
			'https://plus.unsplash.com/premium_photo-1679434184867-a294eb85400c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imgelink:
			'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imgelink:
			'https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		imgelink:
			'https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

export function DefaultAccordion() {
	const [open, setOpen] = React.useState(1);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<>
			<Accordion open={open === 1}>
				<AccordionHeader onClick={() => handleOpen(1)}>Recipes</AccordionHeader>
				<AccordionBody>
					Explore a treasure trove of family-favorite recipes, from comforting
					classics to inventive new dishes.
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 2}>
				<AccordionHeader onClick={() => handleOpen(2)}>
					Cooking Tips
				</AccordionHeader>
				<AccordionBody>
					Discover handy tips, tricks, and techniques to elevate your cooking
					skills and make every meal a success.
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 3}>
				<AccordionHeader onClick={() => handleOpen(3)}>
					Community
				</AccordionHeader>
				<AccordionBody>
					Join our growing community of food lovers, where you can connect with
					others, share your own culinary adventures, and swap stories about
					cooking with Dad. dreams.
				</AccordionBody>
			</Accordion>
		</>
	);
}

export default function About() {
	const [active, setActive] = useState(
		'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	);

	return (
		<div className='px-4 py-20 h-full w-full'>
			<div className='h-full mb-16'>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/aboutme.jpg?alt=media&token=2f7e2976-1cf3-4e4c-92eb-8cfd38a74444'
					className='h-[28rem] w-full object-cover'
				/>
			</div>
			<div className='grid grid-cols-6 p-2'>
				<div className='grid col-span-4 justify-items-start'>
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
							<DefaultAccordion />
						</div>
						<div className='py-6 border-b-2 border-gray-300'>
							<div className='grid grid-cols-2 gap-2 '>
								{data.map(({ imageLink }, index) => (
									<div key={index}>
										<img
											className='rounded-lg object-cover object-center h-60 w-full'
											src={imageLink}
											alt=''
										/>
									</div>
								))}
							</div>
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
						<div className='py-6 border-b-2 border-gray-300'>
							<div className='grid grid-cols-3 gap-2 '>
								{items.map(({ imageLink }, index) => (
									<div key={index}>
										<img
											className='rounded-lg object-cover object-center h-96 w-full'
											src={imageLink}
											alt=''
										/>
									</div>
								))}
							</div>
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
						<div className='py-6 border-b-2 border-gray-300'>
							<div className='grid gap-4'>
								<div>
									<img
										className='h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]'
										src={active}
										alt=''
									/>
								</div>
								<div className='grid grid-cols-4 justify-items-center '>
									{item2.map(({ imgelink }, index) => (
										<div key={index}>
											<img
												onClick={() => setActive(imgelink)}
												src={imgelink}
												className='h-32 w-full cursor-pointer rounded-lg object-cover object-center'
												alt='gallery-image'
											/>
										</div>
									))}
								</div>
							</div>
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
				<div className='grid col-span-2 px-2 border-l-blue-gray-100 border-l justify-self-start'>
					<AboutCard />
				</div>
			</div>
		</div>
	);
}

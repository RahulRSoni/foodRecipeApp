import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';
import { NewsLetterCard } from '../components/Card/NewsLetterCard';

function Icon({ id, open }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={2}
			stroke='currentColor'
			className={`${
				id === open ? 'rotate-180' : ''
			} h-5 w-5 transition-transform`}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M19.5 8.25l-7.5 7.5-7.5-7.5'
			/>
		</svg>
	);
}

export function DefaultAccordion() {
	const [open, setOpen] = React.useState(1);

	const handleOpen = (value) => setOpen(open === value ? 0 : value);

	return (
		<>
			<Accordion
				open={open === 1}
				icon={
					<Icon
						id={1}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(1)}>
					What is Dad's Kitchen?
				</AccordionHeader>
				<AccordionBody>
					Dad's Kitchen is a culinary venture inspired by the love and passion
					for cooking shared by fathers everywhere. We bring you a collection of
					delicious recipes, handy cooking tips, and heartwarming stories to
					inspire you in the kitchen.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 2}
				icon={
					<Icon
						id={2}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(2)}>
					Who is behind Dad's Kitchen?
				</AccordionHeader>
				<AccordionBody>
					Dad's Kitchen is founded by a group of food enthusiasts who share a
					deep appreciation for home-cooked meals and the memories created
					around them. While the team is diverse, our common goal is to
					celebrate the joy of cooking and family togetherness.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 3}
				icon={
					<Icon
						id={3}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(3)}>
					Are the recipes on Dad's Kitchen suitable for beginners?
				</AccordionHeader>
				<AccordionBody>
					Absolutely! Whether you're a seasoned chef or just starting your
					culinary journey, Dad's Kitchen offers a wide range of recipes
					suitable for all skill levels. From simple and quick meals to more
					elaborate dishes, there's something here for everyone to enjoy.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 4}
				icon={
					<Icon
						id={4}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(4)}>
					Can I submit my own recipes to Dad's Kitchen?
				</AccordionHeader>
				<AccordionBody>
					Yes, we welcome contributions from our community! If you have a
					favorite recipe you'd like to share with other cooking enthusiasts,
					feel free to submit it to us. We'll review it and, if approved,
					feature it on our website with credit to you.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 5}
				icon={
					<Icon
						id={5}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(5)}>
					Are the ingredients used in Dad's Kitchen recipes easy to find?
				</AccordionHeader>
				<AccordionBody>
					We strive to create recipes using commonly available ingredients to
					ensure accessibility for our audience. However, depending on your
					location and preferences, some ingredients may vary. We encourage you
					to explore local markets and online stores for any specialty items you
					may need.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 6}
				icon={
					<Icon
						id={6}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(6)}>
					Can I modify the recipes to suit dietary restrictions or preferences?
				</AccordionHeader>
				<AccordionBody>
					Absolutely! Cooking is all about creativity and personalization. Feel
					free to adapt our recipes to accommodate dietary restrictions,
					preferences, or ingredient substitutions. We encourage you to
					experiment and make each recipe your own.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 7}
				icon={
					<Icon
						id={7}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(7)}>
					How often is Dad's Kitchen updated with new content?
				</AccordionHeader>
				<AccordionBody>
					We aim to provide fresh and inspiring content regularly. Our team
					works tirelessly to bring you new recipes, articles, and cooking tips
					on a consistent basis. Be sure to check back often or subscribe to our
					newsletter to stay updated on the latest additions.
				</AccordionBody>
			</Accordion>
			<Accordion
				open={open === 8}
				icon={
					<Icon
						id={8}
						open={open}
					/>
				}>
				<AccordionHeader onClick={() => handleOpen(8)}>
					How can I contact Dad's Kitchen for further inquiries or feedback?
				</AccordionHeader>
				<AccordionBody>
					We value your feedback and are here to assist you in any way we can.
					You can reach out to us through our contact page, where you can submit
					your inquiries, suggestions, or feedback. We look forward to hearing
					from you!
				</AccordionBody>
			</Accordion>
		</>
	);
}

export default function Faq() {
	return (
		<div className='px-4 pt-20 h-full w-full'>
			<div className='h-full mb-16 relative'>
				<img
					src='https://images.unsplash.com/photo-1613135491235-eb6b76a58ead?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					className='h-[28rem] w-full object-cover'
				/>
				<div className='absolute sm:-bottom-10 -bottom-16 px-10 py-5 backdrop-blur-xl rounded-lg border-spacing-0 '>
					<Typography
						variant='h3'
						className=''>
						Frequently Asked Questions (FAQ)
					</Typography>
				</div>
			</div>
			<div className='grid lg:grid-cols-6 p-2 border-b-4'>
				<div className='grid md:col-span-5 justify-items-start px-8 md:py-16  py-6'>
					<DefaultAccordion />
				</div>
			</div>
			<div className='lg:px-56 px-8 mt-20'>
				<NewsLetterCard />
			</div>
		</div>
	);
}

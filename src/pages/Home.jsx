import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';

import { Gallery } from '../components/gallery/gallery.jsx';

import AboutCard from '../components/Card/AboutCard.jsx';
import { BlogCard } from '../components/Card/ItemCard.jsx';
import CardPlaceholderSkeleton from '../components/Loaders/Skeleton.jsx';

function Home() {
	return (
		<>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>
			<div className='px-5 pt-20 '>
				<Banner />
				<Gallery />
				<Menu />
				<div className='grid lg:grid-cols-6  justify-items-center gap-8'>
					<div className='grid lg:col-span-4 justify-items-center'>
						<div className='flex flex-wrap gap-4 justify-center bg-blue-gray-50 backdrop-blur-sm py-8 rounded-lg'>
							<BlogCard />
							<BlogCard />
							<BlogCard />
							<BlogCard />
							<BlogCard />
							<CardPlaceholderSkeleton />
						</div>
					</div>
					<div className='lg:grid lg:col-span-2 px-2 bg-blue-gray-50 backdrop-blur-sm py-8 rounded-lg'>
						<AboutCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;

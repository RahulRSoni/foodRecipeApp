import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';

import { Gallery } from '../components/gallery/gallery.jsx';
import CardPlacehoderSkeleton from '../components/Loaders/Skeleton.jsx';
import AboutCard from '../components/Card/AboutCard.jsx';
import { BlogCard } from '../components/Card/ItemCard.jsx';

function Home() {
	return (
		<div className='px-5 pt-20'>
			<Banner />
			<Gallery />
			<Menu />
			<div className='grid lg:grid-cols-6  justify-items-center gap-8'>
				<div className='grid lg:col-span-4 justify-items-center'>
					<div className='flex flex-wrap gap-4 justify-center'>
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<CardPlacehoderSkeleton />
					</div>
				</div>
				<div className='lg:grid lg:col-span-2 px-2'>
					<AboutCard />
				</div>
			</div>
		</div>
	);
}

export default Home;

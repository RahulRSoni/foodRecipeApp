import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';

import { Gallery } from '../components/gallery/gallery.jsx';
import CardPlacehoderSkeleton from '../components/Loaders/Skeleton.jsx';
import AboutCard from '../components/Card/AboutCard.jsx';
import { BlogCard } from '../components/Card/ItemCard.jsx';

function Home() {
	return (
		<div className='px-5 py-20'>
			<Banner />
			<Gallery />
			<Menu />
			<div className='grid grid-cols-6 justify-items-center  '>
				<div className='grid col-span-4'>
					<div className='flex flex-wrap gap-4'>
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<CardPlacehoderSkeleton />
					</div>
				</div>
				<div className='grid col-span-2 px-2'>
					<AboutCard />
				</div>
			</div>
		</div>
	);
}

export default Home;

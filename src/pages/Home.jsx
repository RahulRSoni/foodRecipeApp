import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';
import { BlogCard } from '../components/Card/Card.jsx';
import { Gallery } from '../components/gallery/gallery.jsx';
import CardPlacehoderSkeleton from '../components/Loaders/Skeleton.jsx';

function Home() {
	return (
		<div className='px-5 py-20'>
			<Banner />
			<Gallery />
			<Menu />
			<div className='grid grid-cols-2 w-[70%] content-center '>
				<BlogCard />
				<BlogCard />
				<CardPlacehoderSkeleton />
			</div>
		</div>
	);
}

export default Home;

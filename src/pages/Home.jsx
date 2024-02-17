import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';
import { BlogCard } from '../components/Card/Card.jsx';
import { Gallery } from '../components/gallery/gallery.jsx';

function Home() {
	return (
		<div className='px-5 py-20'>
			<Banner />
			<Gallery />
			<Menu />
			<BlogCard />
		</div>
	);
}

export default Home;

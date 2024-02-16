import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';
import { BlogCard } from '../components/Card/Card.jsx';

function Home() {
	return (
		<div className='px-5 py-20'>
			<Banner />
			<Menu />
			<BlogCard />
		</div>
	);
}

export default Home;

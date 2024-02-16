import React from 'react';

const items = [
	{ name: 'appetizer', image: '/appetizer.jpg' },
	{ name: 'vegan', image: '/vegan.jpg' },
	{ name: 'tandoori', image: '/tandoori.jpg' },
	{ name: 'chicken', image: '/chicken.jpg' },
	{ name: 'sweets', image: '/sweets.jpg' },
	{ name: 'salad', image: '/salad.jpg' },
	{ name: 'pasta', image: '/pasta.jpg' },
	{ name: 'chinese', image: '/chinese.jpg' },
	{ name: 'beverages', image: '/beverages.jpg' },
	{ name: 'bakery', image: '/bakery.jpg' },
	{ name: 'soup', image: '/soup.jpg' },
];

function Menu() {
	return (
		<div className=' h-[40vh] my-10 flex items-center justify-evenly '>
			{items.map((item, index) => (
				<div
					key={index}
					className=' flex flex-col justify-evenly items-center gap-2 '>
					<img
						src={item.image}
						className='cursor-pointer rounded-full object-cover transition-all h-28 w-28 border-double border-8 border-blue-gray-300'
					/>
					<span className='font-semibold uppercase text-sm border-blue-gray-500'>
						{item.name}
					</span>
				</div>
			))}
		</div>
	);
}

export default Menu;
import React from 'react';

const items = [
	{
		name: 'appetizer',
		image: '/public/appetizer.jpg',
	},
	{
		name: 'vegan',
		image: '/public/vegan.jpg',
	},
	{
		name: 'tandoori',
		image: '/public/tandoori.jpg',
	},
	{
		name: 'chicken',
		image: '/public/chicken.jpg',
	},
	{
		name: 'sweets',
		image: '/public/sweets.jpg',
	},
	{
		name: 'salad',
		image: '/public/salad.jpg',
	},
	{
		name: 'pasta',
		image: '/public/pasta.jpg',
	},
	{
		name: 'chinese',
		image: '/public/chinese.jpg',
	},
	{
		name: 'beverages',
		image: '/public/beverages.jpg',
	},
	{
		name: 'bakery',
		image: '/public/bakery.jpg',
	},
	{
		name: 'soup',
		image: '/public/soup.jpg',
	},
];

function Menu() {
	return (
		<div className='flex flex-col justify-center items-center gap-8'>
			<span className='mt-10  text-xl font-semibold text-blue-gray-100 border-b-4 border-gray-400'>
				Our food menu
			</span>
			<div className=' mb-5 flex items-center justify-evenly gap-2 flex-wrap'>
				{items.map((item, index) => (
					<div
						key={index}
						className=' flex flex-col justify-evenly items-center gap-3 '>
						<img
							src={item.image}
							className='cursor-pointer rounded-full object-cover transition-all md:h-24 md:w-24 h-28 w-28  border-double border-8 border-blue-gray-300'
						/>
						<span className='font-semibold uppercase text-sm border-blue-gray-500 text-blue-gray-50'>
							{item.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Menu;

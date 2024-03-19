import React from 'react';

const items = [
	{
		name: 'appetizer',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/appetizer.jpg?alt=media&token=655e5571-9830-4ce3-82f3-864ecb41372e',
	},
	{
		name: 'vegan',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/vegan.jpg?alt=media&token=65a71f1d-b1c9-4208-9001-742cc37df16f',
	},
	{
		name: 'tandoori',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/tandoori.jpg?alt=media&token=a7c79900-4c74-41d5-9826-1472d52a7902',
	},
	{
		name: 'chicken',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/chicken.jpg?alt=media&token=507fb8ff-4632-4db1-9a2d-917bff9b9f22',
	},
	{
		name: 'sweets',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/sweets.jpg?alt=media&token=60ecd18e-d8e9-4a31-9fa1-11318371bff3',
	},
	{
		name: 'salad',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/salad.jpg?alt=media&token=3b2ac1dc-28b7-4e32-9393-24d2e7799db5',
	},
	{
		name: 'pasta',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/pasta.jpg?alt=media&token=a66258b8-7dc5-4c9a-a01e-ddf04451d59b',
	},
	{
		name: 'chinese',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/chinese.jpg?alt=media&token=288f5e2a-f6ba-4ba6-a0cb-f283972a6fcd',
	},
	{
		name: 'beverages',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/beverages.jpg?alt=media&token=3fc6fc47-9773-4573-a189-35956d51a40d',
	},
	{
		name: 'bakery',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/bakery.jpg?alt=media&token=5c86cdcd-df66-42ec-bb83-17ed77239035',
	},
	{
		name: 'soup',
		image:
			'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/soup.jpg?alt=media&token=5916585a-8537-47dd-bb90-b97203595fbf',
	},
];

function Menu() {
	return (
		<div className='flex flex-col justify-center items-center gap-8'>
			<span className='mt-10  text-xl font-semibold text-blue-gray-500 border-b-4 border-gray-400'>
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
						<span className='font-semibold uppercase text-sm border-blue-gray-500'>
							{item.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Menu;

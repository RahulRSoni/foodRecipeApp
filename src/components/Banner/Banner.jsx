import React, { useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';

const image = [
	{
		name: 'image 1',
		src: '/img12.jpg',
	},
	{
		name: 'image 2',
		src: '/img2.jpg',
	},
	{
		name: 'image 3',
		src: '/img3.jpg',
	},
	{
		name: 'image 4',
		src: '/img4.jpg',
	},
	{
		name: 'image 5',
		src: '/img5.jpg',
	},
	{
		name: 'image 6',
		src: '/img6.jpg',
	},
	{
		name: 'image 7',
		src: '/img7.jpg',
	},
	{
		name: 'image 8',
		src: '/img8.jpg',
	},
];

export default function Banner() {
	return (
		<div>
			<div className='h-full w-auto'>
				<Carousel
					loop
					autoplay
					transition={{ duration: 1.5 }}
					className='rounded-2xl'
					navigation={({ setActiveIndex, activeIndex }) => (
						<div className='absolute bottom-2 left-2/4 z-50 flex -translate-x-3/4 gap-1'>
							{image.map((item, i) => {
								return (
									<img
										key={i}
										src={`${item.src}`}
										alt={`image ${i + 1}`}
										className={`cursor-pointer  rounded-xl transition-all xl:h-20 h-2 ${
											activeIndex === i ? '' : 'filter grayscale opacity-70'
										}`}
										onClick={() => setActiveIndex(i)}
									/>
								);
							})}
						</div>
					)}>
					{image.map((image, i) => (
						<img
							key={i}
							src={image.src}
							alt={image.name}
							className=' h-[30rem] min-h-min w-full object-cover rounded-2xl'
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
}

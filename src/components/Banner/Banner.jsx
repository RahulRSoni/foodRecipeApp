import React, { useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';
import Footer from '../components/Footer/Footer.jsx';

const image = [
	{
		name: 'image 1',
		src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
	},
	{
		name: 'image 2',
		src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
	},
	{
		name: 'image 3',
		src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
	},
];

export default function Banner() {
	useEffect(() => {
		document.body.style.overflow = 'hidden'; // Apply overflow-hidden to the body
		return () => {
			document.body.style.overflow = 'visible'; // Revert overflow back to visible when component unmounts
		};
	}, []);

	return (
		<div>
			<div className='h-full'>
				<Carousel
					loop
					autoplayDelay={2000}
					className='rounded-2xl'
					transition={{ duration: 2 }}
					navigation={({ setActiveIndex, activeIndex }) => (
						<div className='absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
							{image.map((item, i) => {
								return (
									<img
										key={i}
										src={`${item.src}`}
										alt={`image ${i + 1}`}
										className={`cursor-pointer rounded-xl transition-all h-20 ${
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
							className=' h-[30rem] w-full object-cover rounded-2xl'
						/>
					))}
				</Carousel>
			</div>
			<Footer />
		</div>
	);
}

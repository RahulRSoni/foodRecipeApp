import React, { useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';

const image = [
	{
		name: 'image 1',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img12.jpg?alt=media&token=c0f82799-dd31-425c-ad17-cc5399a01faf',
	},
	{
		name: 'image 2',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img2.jpg?alt=media&token=d0054ee7-af0c-4c88-b164-03980c49245d',
	},
	{
		name: 'image 3',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img3.jpg?alt=media&token=63073fa6-e067-4120-8b37-3131cf04f1d2',
	},
	{
		name: 'image 4',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img4.jpg?alt=media&token=90f12b5e-b385-4b2b-a0b7-464fb2101626',
	},
	{
		name: 'image 5',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img5.jpg?alt=media&token=ba0c6fae-b4f9-4149-892c-21c2b48f6794',
	},
	{
		name: 'image 6',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img6.jpg?alt=media&token=26164a19-4f7a-4d32-ab8b-9caf6afce262',
	},
	{
		name: 'image 7',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img7.jpg?alt=media&token=8ae2fc97-ba49-4161-b74a-a85cdafaf203',
	},
	{
		name: 'image 8',
		src: 'https://firebasestorage.googleapis.com/v0/b/foodblog-dc4fb.appspot.com/o/img8.jpg?alt=media&token=82a26720-4d5d-4d44-8160-969230462ea2',
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
										className={`cursor-pointer  rounded-xl transition-all lg:h-20 h-6 ${
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
							className=' h-[26rem] min-h-min w-full object-cover rounded-2xl'
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
}

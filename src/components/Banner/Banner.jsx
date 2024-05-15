import React, { useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';

export default function Banner({ randomImages }) {
	return (
		<div>
			<div className='h-full w-full '>
				<Carousel
					loop
					autoplay
					transition={{ duration: 1.5 }}
					className='rounded-2xl'
					navigation={({ setActiveIndex, activeIndex }) => (
						<div className='absolute bottom-2 left-1/4 z-50 flex -translate-x-3/4 gap-1 flex-grow w-96'>
							{randomImages.map((item, i) => {
								return (
									<img
										key={i}
										src={`${item}`}
										alt={`image ${i + 1}`}
										className={`cursor-pointer w-full rounded-xl transition-all lg:h-20 h-6 ${
											activeIndex === i ? '' : 'filter grayscale opacity-70'
										}`}
										onClick={() => setActiveIndex(i)}
									/>
								);
							})}
						</div>
					)}>
					{randomImages.map((image, i) => (
						<div
							key={i}
							className='w-full'>
							<img
								src={image}
								alt={image}
								className=' h-[26rem] min-w-full object-cover rounded-2xl'
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}

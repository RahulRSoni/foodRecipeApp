import React from 'react';
import { TestimonialCard } from './Card/TestimonialCard';

const ScrollCarousel = () => {
	return (
		<>
			<div className=' w-full p-6 overflow-x-hidden rounded-lg'>
				<div className='animate-marquee-infinite'>
					<div className='flex w-full gap-2'>
						<TestimonialCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default ScrollCarousel;

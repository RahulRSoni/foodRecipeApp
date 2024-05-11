import React from 'react';
import { TestimonialCard } from './Card/TestimonialCard';

const ScrollCarousel = () => {
	return (
		<>
			<div className=' w-full p-6 overflow-x-hidden rounded-lg'>
				<div className='flex animate-marquee-infinite'>
					<div className='flex w-full gap-6'>
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default ScrollCarousel;

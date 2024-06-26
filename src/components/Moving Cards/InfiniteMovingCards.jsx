import React, { useEffect, useState } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
	Rating,
} from '@material-tailwind/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getAllTestimonial } from '../../api/store.services.js';
import { toast } from 'react-toastify';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function InfiniteMovingCardsDemo() {
	const [testimonial, setTestimonial] = useState(null);

	useEffect(() => {
		getAllTestimonial()
			.then((data) => {
				setTestimonial(data);
			})
			.catch((error) => {
				toast.error(`Error fetching testimonials: ${error.message}`);
			});
	}, []);

	return (
		<div className='rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
			<InfiniteMovingCards
				items={testimonial}
				direction='right'
				speed='fast'
			/>
		</div>
	);
}

export const InfiniteMovingCards = ({
	items,
	direction = 'right',
	speed = 'fast',
	pauseOnHover = true,
	className,
}) => {
	const containerRef = React.useRef(null);
	const scrollerRef = React.useRef(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			const directionValue = direction === 'left' ? 'forwards' : 'reverse';
			containerRef.current.style.setProperty(
				'--animation-direction',
				directionValue,
			);
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			const duration =
				speed === 'fast' ? '30s' : speed === 'normal' ? '40s' : '80s';
			containerRef.current.style.setProperty('--animation-duration', duration);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className,
			)}>
			<div
				ref={scrollerRef}
				className={cn(
					'flex min-w-full shrink-0 gap-4 py-4 flex-nowrap w-full',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]',
				)}>
				{items &&
					items.map((item) => (
						<Card
							color='white'
							shadow={false}
							key={item.id}
							className='w-96 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6'>
							<CardHeader
								color='transparent'
								floated={false}
								shadow={false}
								className='mx-0 flex items-center gap-4 pt-0 pb-8'>
								<Avatar
									size='lg'
									variant='circular'
									src={item.user.photoURL}
									alt={item.user.displayName}
								/>
								<div className='flex w-full flex-col gap-0.5'>
									<div className='flex items-center justify-between'>
										<Typography
											variant='h5'
											color='blue-gray'>
											{item.user.displayName}
										</Typography>
									</div>
									<div className='5 flex items-center gap-0'>
										<Rating
											value={item.testimonial.rating}
											readonly
										/>
									</div>
								</div>
							</CardHeader>
							<CardBody className='mb-6 py-0'>
								<Typography>{`" ${item.testimonial.message} "`}</Typography>
							</CardBody>
						</Card>
					))}
			</div>
		</div>
	);
};

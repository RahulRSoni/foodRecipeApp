import { Typography } from '@material-tailwind/react';

export function Gallery({ randomImages }) {
	return (
		<div className='flex flex-col justify-center items-center '>
			<span className='m-10 text-xl font-semibold text-blue-gray-100 border-b-4 border-gray-400'>
				People whose where like
			</span>
			<div className='grid grid-cols-3 gap-4 md:grid-cols-4'>
				<div className='grid gap-4 h-full'>
					<div className='relative h-96'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[0]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-56'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[1]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-96'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[2]}
							alt='gallery-photo'
						/>
					</div>
				</div>
				<div className='grid gap-4 h-full'>
					<div className='relative h-56'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[3]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-96'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[4]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-56'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[5]}
							alt='gallery-photo'
						/>
					</div>
				</div>
				<div className='grid gap-4 h-full'>
					<div className='relative h-96'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[6]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-56'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[7]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-96'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[8]}
							alt='gallery-photo'
						/>
					</div>
				</div>
				<div className='md:grid gap-4 hidden'>
					<div className='relative h-56'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[9]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-96'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[10]}
							alt='gallery-photo'
						/>
					</div>
					<div className='relative h-56'>
						<img
							className='h-full w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src={randomImages[11]}
							alt='gallery-photo'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

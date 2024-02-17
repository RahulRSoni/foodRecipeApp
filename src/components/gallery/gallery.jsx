import { Typography } from '@material-tailwind/react';

export function Gallery() {
	return (
		<div className='flex flex-col justify-center items-center '>
			<span className='m-10 text-xl font-semibold text-blue-gray-500 border-b-4 border-gray-400'>
				People whose where like
			</span>
			<div className='grid grid-cols-3 gap-4 md:grid-cols-4'>
				<div className='grid gap-4'>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
							alt='gallery-photo'
						/>

						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
				</div>
				<div className='grid gap-4'>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://docs.material-tailwind.com/img/team-3.jpg'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
				</div>
				<div className='grid gap-4'>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://docs.material-tailwind.com/img/team-3.jpg'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
				</div>
				<div className='grid gap-4'>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
					<div style={{ position: 'relative' }}>
						<img
							className='h-auto max-w-full rounded-lg object-cover object-center hover:scale-105 hover:duration-300 transition-all filter grayscale opacity-70 hover:filter-none hover:opacity-100'
							src='https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
							alt='gallery-photo'
						/>
						<Typography className='absolute text-sm bottom-4 font-semibold right-4 p-1 bg-blue-gray-100/70 rounded-lg'>
							gallery-photo
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from '@material-tailwind/react';
import { FiMenu, FiX } from 'react-icons/fi';

function NavList() {
	return (
		<ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-blue-gray-600'>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 text-pretty font-semibold'>
				<a
					href='/'
					className='flex items-center hover:text-blue-500 transition-colors'>
					Home
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 text-pretty font-semibold'>
				<a
					href='/about'
					className='flex items-center hover:text-blue-500 transition-colors'>
					About
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 text-pretty font-semibold'>
				<a
					href='/contact'
					className='flex items-center hover:text-blue-500 transition-colors'>
					Contact
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 text-pretty font-semibold'>
				<a
					href='/faq'
					className='flex items-center hover:text-blue-500 transition-colors'>
					FAQ
				</a>
			</Typography>
		</ul>
	);
}

export function Navbar2() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<Navbar className='mx-auto max-w-screen-xl px-6 py-3'>
			<div className='flex items-center justify-between text-blue-gray-900'>
				<Typography
					as='a'
					href='/'
					className='mx-20 font-bold cursor-pointer'>
					<img
						alt='logo'
						className=' w-[10rem] mix-blend-multiply'
						src='/logo.svg'
					/>
				</Typography>
				<div className='hidden lg:block'>
					<NavList />
				</div>
				<IconButton
					variant='text'
					className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
					ripple={false}
					onClick={() => setOpenNav(!openNav)}>
					{openNav ? (
						<FiX
							className='h-6 w-6'
							strokeWidth={2}
						/>
					) : (
						<FiMenu
							className='h-6 w-6'
							strokeWidth={2}
						/>
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</Navbar>
	);
}

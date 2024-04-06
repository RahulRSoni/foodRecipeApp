import React from 'react';
import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import ProfileMenu from './ProfileMenu';

export function Header() {
	const [openNav, setOpenNav] = React.useState(false);
	const navigate = useNavigate();

	const success = false;

	React.useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 720 && setOpenNav(false),
		);
	}, []);

	const navList1 = (
		<ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-semibold text-blue-gray-400'>
				<a
					href='/'
					className='flex items-center'>
					Home
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-semibold text-blue-gray-400'>
				<a
					href='/courses'
					className='flex items-center'>
					Courses
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-semibold text-blue-gray-400'>
				<a
					href='/recipe'
					className='flex items-center'>
					Recipes
				</a>
			</Typography>
		</ul>
	);

	const navList2 = (
		<ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row  lg:items-center lg:gap-6'>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-semibold text-blue-gray-400'>
				<a
					href='/about'
					className='flex items-center'>
					About
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-semibold text-blue-gray-400'>
				<a
					href='/contact'
					className='flex items-center'>
					Contact
				</a>
			</Typography>
			<Typography
				as='li'
				variant='small'
				color='blue-gray'
				className='p-1 font-semibold text-blue-gray-400'>
				<a
					href='/faq'
					className='flex items-center'>
					FAQ
				</a>
			</Typography>
		</ul>
	);

	const handleClick = () => {
		navigate('/auth'); // Call navigate when button is clicked
	};

	return (
		<div className=' w-[calc(100%)] max-h-[768px] fixed z-[100] '>
			<Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4  drop-shadow-lg border-none'>
				<div className='flex items-center justify-between'>
					<div className='mr-10 hidden lg:block'>{navList1}</div>
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
					<div className='mr-4 hidden lg:block'>{navList2}</div>
					<div className='flex items-center gap-x-1 '>
						{success ? (
							<ProfileMenu />
						) : (
							<Button
								variant='gradient'
								size='sm'
								onClick={handleClick}
								className='hidden lg:inline-block'>
								<span>Log In / Sign Up</span>
							</Button>
						)}
					</div>
					<IconButton
						variant='text'
						className='ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
						ripple={false}
						onClick={() => setOpenNav(!openNav)}>
						{openNav ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								className='h-6 w-6'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<div className='flex items-center gap-x-6 ml-8'>
						<div className='flex items-center'>{navList1}</div>
						<div className='flex items-center'>{navList2}</div>
					</div>
					<div className='flex items-center gap-x-1'>
						{success ? (
							<ProfileMenu />
						) : (
							<Button
								fullWidth
								variant='gradient'
								onClick={handleClick}
								size='sm'>
								<span className='text-blue-gray-200'>Log In / Sign Up</span>
							</Button>
						)}
					</div>
				</Collapse>
			</Navbar>
		</div>
	);
}

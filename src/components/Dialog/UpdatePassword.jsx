import React from 'react';
import { Typography, Tooltip } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function UpdatePassword() {
	const navigate = useNavigate();

	const handleNavigation = () => navigate('/passwordReset');
	return (
		<>
			<Tooltip
				content={
					<Typography
						color='blue-gray'
						className='text-xs'>
						Update Password
					</Typography>
				}
				className='bg-white shadow-xl shadow-black/10 '
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0, y: 25 },
				}}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					onClick={handleNavigation}
					className='w-5 h-5 text-blue-400 cursor-pointer'>
					<path d='M17 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM17 15.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.75 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.5 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM10 11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 10 11ZM10.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.75 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16.25 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' />
				</svg>
			</Tooltip>
		</>
	);
}

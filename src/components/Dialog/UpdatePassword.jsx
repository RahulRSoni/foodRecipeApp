import React from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Typography,
	Tooltip,
} from '@material-tailwind/react';

export default function UpdatePassword() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

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
					onClick={handleOpen}
					className='w-5 h-5 text-blue-400'>
					<path d='M17 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM17 15.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM3.75 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM4.5 2.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5ZM10 11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 10 11ZM10.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5ZM10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.75 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM16.25 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' />
				</svg>
			</Tooltip>
			<Dialog
				open={open}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}>
				<DialogHeader>Update your self.</DialogHeader>
				<DialogBody>
					<div className='text-gray-700'>
						<div className='grid md:grid-cols-1 text-sm'>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Old Password'
									type='password'
								/>
							</div>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='New Password'
									type='password'
								/>
							</div>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Confirm Password'
									type='password'
								/>
							</div>
						</div>
					</div>
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={handleOpen}
						className='mr-1'>
						<span>Cancel</span>
					</Button>
					<Button
						variant='gradient'
						color='green'
						onClick={handleOpen}>
						<span>Update</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}

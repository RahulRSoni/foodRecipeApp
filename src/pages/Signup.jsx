import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
	Button,
} from '@material-tailwind/react';

import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
	return (
		<div className='flex justify-center items-center'>
			<Card className='w-[40vw] px-5 pt-32'>
				<CardHeader
					variant='gradient'
					color='gray'
					className='mb-4 grid h-16 place-items-center'>
					<Typography
						variant='h3'
						color='white'>
						Sign Up
					</Typography>
				</CardHeader>
				<CardBody className='flex flex-col gap-4'>
					<div className='flex gap-4'>
						<Input
							label='Full Name'
							size='lg'
							required
						/>
						<Input
							label='Mobile'
							size='lg'
							required
						/>
					</div>
					<div className='flex gap-4'>
						<Input
							label='Email'
							size='lg'
							required
						/>
						<Input
							label='Password'
							size='lg'
							required
							type='password'
						/>
					</div>
					<Input
						label='Avatar'
						size='lg'
						type='file'
						required
					/>
				</CardBody>
				<div className='px-5 py-2 flex items-center gap-1'>
					<Checkbox label='I agree with the ' />
					<Link
						to='#'
						className='font-bold'>
						{' '}
						Terms and Conditions{' '}
					</Link>
				</div>
				<CardFooter className='pt-0'>
					<Button
						variant='gradient'
						fullWidth>
						Sign Up
					</Button>
					<Typography
						variant='small'
						className='mt-6 flex justify-center'>
						Already have an account?
						<Typography
							as='a'
							href='/signin'
							variant='small'
							color='blue-gray'
							className='ml-1 font-bold'>
							Sign In
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}

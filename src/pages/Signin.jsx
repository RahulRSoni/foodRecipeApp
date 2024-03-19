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

export default function SignInPage() {
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
						Sign In
					</Typography>
				</CardHeader>
				<CardBody className='flex flex-col gap-4'>
					<Input
						label='Email'
						size='lg'
						required
					/>
					<Input
						label='Password'
						size='lg'
						required
					/>
					<div className='-ml-2.5'>
						<Checkbox label='Remember Me' />
					</div>
				</CardBody>
				<CardFooter className='pt-0'>
					<Button
						variant='gradient'
						fullWidth>
						Sign In
					</Button>
					<Typography
						variant='small'
						className='mt-6 flex justify-center'>
						Don&apos;t have an account?
						<Typography
							as='a'
							href='/signup'
							variant='small'
							color='blue-gray'
							className='ml-1 font-bold'>
							Sign up
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
}

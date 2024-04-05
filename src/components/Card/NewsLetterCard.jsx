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

export function NewsLetterCard() {
	return (
		<Card>
			<CardHeader
				variant='gradient'
				className='mb-4 grid h-28 place-items-center'>
				<Typography variant='h3'>Never Miss a Recipe!</Typography>
				<Typography variant='lead'>
					Join thousands of dad's Kitchen subscribers and get our best recipes
					delivered each week!
				</Typography>
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				<Input
					label='Email'
					size='lg'
				/>
			</CardBody>
			<CardFooter className='pt-0'>
				<Button
					variant='gradient'
					fullWidth>
					Subscribers
				</Button>
				<div className='text-sm mt-6 flex justify-center items-center gap-1'>
					<input
						type='checkbox'
						className='form-checkbox mr-1 h-4 w-4 text-blue-500'
					/>
					<p className='text-blue-gray-300 '>I have read and agree to the</p>
					<a
						href='#signup'
						className='text-blue-gray-500 font-bold underline'>
						terms & conditions.
					</a>
				</div>
			</CardFooter>
		</Card>
	);
}

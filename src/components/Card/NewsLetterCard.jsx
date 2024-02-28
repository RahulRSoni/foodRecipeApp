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
					Sign In
				</Button>
				<Typography
					variant='small'
					className='mt-6 flex justify-center items-center'>
					<Checkbox label=' I have read and agree to the ' />{' '}
					<Typography
						as='a'
						href='#signup'
						variant='small'
						color='blue-gray'
						className='ml-1 font-bold underline'>
						terms & conditions.
					</Typography>
				</Typography>
			</CardFooter>
		</Card>
	);
}

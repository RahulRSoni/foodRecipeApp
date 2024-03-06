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
import { Textarea } from '@material-tailwind/react';

export function ContactCard() {
	return (
		<Card className='w-full'>
			<CardHeader
				variant='gradient'
				color='gray'
				className='mb-4 grid h-16 place-items-center'>
				<Typography
					variant='h6'
					color='white'>
					Contact Information
				</Typography>
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				<Input
					label='Full Name*'
					size='lg'
				/>
				<Input
					label='Email'
					type='email'
					size='lg'
				/>
				<Input
					label='Subject'
					size='lg'
				/>
				<Textarea
					label='Message'
					size='lg'
				/>
			</CardBody>
			<CardFooter className='pt-0'>
				<Button
					variant='gradient'
					fullWidth>
					Contact
				</Button>
			</CardFooter>
		</Card>
	);
}

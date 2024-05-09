import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Rating,
	Button,
	Textarea,
} from '@material-tailwind/react';
import { useState } from 'react';

export function FeedbackForm() {
	const [rated, setRated] = useState(4);
	return (
		<Card>
			<CardHeader
				variant='gradient'
				className='mb-4 grid h-28 place-items-center'>
				<Typography variant='h3'>We happy to know you!</Typography>
				<Typography variant='lead'>
					Join thousands of dad's Kitchen subscribers and we need your
					responses.
				</Typography>
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				<Textarea
					label='Message'
					size='lg'
				/>
				<div className='flex items-center flex-col gap-2 font-bold text-blue-gray-500'>
					<Typography
						color='blue-gray'
						className='font-normal text-blue-gray-500 flex justify-center items-center gap-2'>
						Please, rate our web-side
						<Rating
							value={4}
							onChange={(value) => setRated(value)}
						/>
					</Typography>
					{rated}/5
				</div>
			</CardBody>
			<CardFooter className='pt-0'>
				<Button
					variant='gradient'
					fullWidth>
					submit
				</Button>
			</CardFooter>
		</Card>
	);
}

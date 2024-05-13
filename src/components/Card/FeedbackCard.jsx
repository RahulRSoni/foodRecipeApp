import React, { useState } from 'react';
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
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addTestimonial } from '../../api/store.services';

export function FeedbackForm() {
	const [rated, setRated] = useState(0);

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const refData = await addTestimonial(data);

			if (refData) {
				toast.success(
					'Thank you, for your valuable opinion and rating for us.',
				);
				reset();
			}
		} catch (error) {
			toast.error(errors);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card>
				<CardHeader
					variant='gradient'
					className='mb-4 grid h-28 place-items-center'>
					<Typography variant='h3'>We're happy to know you!</Typography>
					<Typography variant='lead'>
						Join thousands of Dad's Kitchen subscribers and we need your
						responses.
					</Typography>
				</CardHeader>
				<CardBody className='flex flex-col gap-4'>
					<Textarea
						label='Message'
						{...register('message')}
						size='lg'
						maxLength={170}
					/>
					<div className='flex items-center flex-col gap-2 font-bold text-blue-gray-500'>
						<Typography
							color='blue-gray'
							className='font-normal text-blue-gray-500 flex justify-center items-center gap-2'>
							Please, rate our website
						</Typography>
						<Rating
							value={rated}
							onChange={(value) => {
								setRated(value);
								setValue('rating', value); // Update form value using setValue
							}}
						/>
						{rated}/5
					</div>
				</CardBody>
				<CardFooter className='pt-0'>
					<Button
						variant='gradient'
						type='submit'
						fullWidth>
						Submit
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}

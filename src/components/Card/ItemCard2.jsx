import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from '@material-tailwind/react';

export function BlogCard2({ recipes, onDelete, onEdit }) {
	const { recipe, user, timestamp } = recipes;

	const formatMemberSince = (timestamp) => {
		// Assuming timestamp is in milliseconds
		const date = new Date(Number(timestamp) * 1000);
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
		// Customize the date format as needed
		return date.toLocaleDateString(undefined, options);
	};

	return (
		<>
			<Card className='max-w-[24rem] overflow-hidden shadow-2xl '>
				<div className='rounded-lg'>
					<CardHeader
						floated={false}
						shadow={false}
						color='transparent'
						className='m-0 hover:scale-110 transition-all hover:duration-1000 '>
						<img
							src={recipe.recipesImages[0]}
							alt='recipe images'
							className='h-64 w-full object-cover'
						/>
					</CardHeader>
				</div>
				<CardBody className='h-[4.5rem]'>
					<Typography
						variant='h4'
						color='blue-gray'>
						{recipe.title}
					</Typography>
				</CardBody>
				<CardFooter className='flex items-center justify-between'>
					<Typography className='font-normal'>
						{timestamp ? formatMemberSince(timestamp.seconds) : ''}
					</Typography>
					<div className='flex gap-4'>
						{onEdit && (
							<Tooltip
								content={
									<Typography
										color='blue-gray'
										className='text-xs'>
										Edit Post
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
									onClick={() => onEdit(recipes.id)}
									className='w-auto h-5 text-green-500'>
									<path d='m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z' />
									<path d='M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z' />
								</svg>
							</Tooltip>
						)}

						{onDelete && (
							<Tooltip
								content={
									<Typography
										color='blue-gray'
										className='text-xs'>
										Delete Post
									</Typography>
								}
								className='bg-white shadow-xl shadow-black/10 '
								animate={{
									mount: { scale: 1, y: 0 },
									unmount: { scale: 0, y: 25 },
								}}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									onClick={() => onDelete(recipes.id)}
									className='w-auto h-5 text-red-500'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
									/>
								</svg>
							</Tooltip>
						)}
					</div>
				</CardFooter>
			</Card>
		</>
	);
}

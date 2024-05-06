import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Tooltip,
} from '@material-tailwind/react';

export function BlogCard({ data }) {
	const { user, recipe, timestamp, id } = data;

	console.log(user);
	return (
		<Card className='max-w-[24rem] overflow-hidden shadow-xl  '>
			<div className='rounded-lg'>
				<CardHeader
					floated={false}
					shadow={false}
					color='transparent'
					className='m-0 hover:scale-110 transition-all hover:duration-1000 '>
					<img
						src={data && recipe.recipesImages[0]}
						alt='ui/ux review check'
						className='h-72 w-full object-cover'
					/>
				</CardHeader>
			</div>
			<CardBody>
				<Typography
					variant='h4'
					color='blue-gray'>
					{data && recipe.title}
				</Typography>
				<Typography
					variant='lead'
					color='gray'
					className='mt-3 font-normal'>
					{data && recipe.content}
				</Typography>
			</CardBody>
			<CardFooter className='flex items-center justify-between'>
				<div className='flex items-center -space-x-3'>
					<Tooltip content={data && user.displayName}>
						<Avatar
							size='sm'
							variant='circular'
							alt='natali craig'
							src={data && user.photoURL}
							className='border-2 border-white hover:z-10'
						/>
					</Tooltip>
				</div>
				<Typography className='font-normal'>January 10</Typography>
			</CardFooter>
		</Card>
	);
}

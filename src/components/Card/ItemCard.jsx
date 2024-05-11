import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Tooltip,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export function BlogCard({ data }) {
	const { user, recipe, timestamp, id } = data;

	function truncateString(str) {
		// Split the string into an array of words
		let words = str.split(' ');

		// Slice the array to get the first 50 words
		let truncatedWords = words.slice(0, 25);

		// Join the words back together into a string
		let truncatedString = truncatedWords.join(' ');

		// Add ellipsis (...) at the end
		truncatedString += '...';

		// Return the truncated string
		return truncatedString;
	}

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
		<Card className='h-[28rem] sm:w-[19rem] w-full overflow-hidden shadow-xl cursor-context-menu'>
			<div className='rounded-lg'>
				<CardHeader
					floated={false}
					shadow={false}
					color='transparent'
					className='m-0 hover:scale-110 transition-all hover:duration-1000 '>
					<Link
						className='content'
						to={`/recipe/${recipe.course}/${id}`}>
						<img
							src={data && recipe.recipesImages[0]}
							alt='ui/ux review check'
							className='h-56 w-full object-cover'
						/>
					</Link>
				</CardHeader>
			</div>
			<CardBody className='pb-0 px-4'>
				<Typography
					variant='h6'
					color='blue-gray'>
					{data && recipe.title}
				</Typography>
				<Typography
					variant='lead'
					color='gray'
					className='mt-1 text-sm h-[5rem]'>
					{data && truncateString(recipe.content)}
				</Typography>
			</CardBody>
			<CardFooter className='flex items-center justify-between '>
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
				<Typography className='font-normal'>
					{timestamp ? formatMemberSince(timestamp.seconds) : ''}
				</Typography>
			</CardFooter>
		</Card>
	);
}

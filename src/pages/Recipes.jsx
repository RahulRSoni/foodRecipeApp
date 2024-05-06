import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { PiForkKnifeLight } from 'react-icons/pi';
import { GiCampCookingPot } from 'react-icons/gi';
import { IoIosTimer } from 'react-icons/io';
import { LiaCookieBiteSolid } from 'react-icons/lia';
import { IoMdTime } from 'react-icons/io';
import { GiSandsOfTime } from 'react-icons/gi';
import { List, ListItem, Card } from '@material-tailwind/react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { AiOutlineDingtalk } from 'react-icons/ai';
import { FcChargeBattery, FcAcceptDatabase, FcGlobe } from 'react-icons/fc';
import { AiOutlineTags } from 'react-icons/ai';
import { NewsLetterCard } from '../components/Card/NewsLetterCard';
import UserCard from '../components/Card/UserCard';
import { useParams } from 'react-router-dom';
import { getIdWiseRecipeData } from '../api/store.services';
import { toast } from 'react-toastify';

// Function to merge commentBox and recipeImages
function mergeCommentBoxAndRecipeImages(recipeData) {
	const { commentBox, recipesImages, ...rest } = recipeData.recipe;
	const mergedData = [];

	if (
		!commentBox ||
		!recipesImages ||
		commentBox.length !== recipesImages.length
	) {
		// Handle error condition where commentBox or recipesImages are missing or have different lengths
		console.error('Error: Missing or mismatched commentBox or recipesImages');
		return null; // Or handle the error in an appropriate way
	}

	commentBox.forEach((comment, index) => {
		const mergedItem = {
			text: comment.text,
			image: recipesImages[index] || null,
		};
		mergedData.push(mergedItem);
	});

	return { ...rest, mergedData, recipeImages: recipesImages };
}

export default function RecipePage() {
	const [recipes, setRecipes] = useState(null);

	const params = useParams();
	const paramsId = params.recipeId;

	useEffect(() => {
		try {
			if (paramsId) {
				getIdWiseRecipeData(paramsId)
					.then((recipeData) => {
						const mergedData = mergeCommentBoxAndRecipeImages(recipeData);
						setRecipes(mergedData);
					})
					.catch((error) => {
						console.error('Error fetching recipes:', error.message);
					});
			}
		} catch (error) {}
	}, [paramsId]);

	function convertTimeFormat(timeString) {
		// Split the time string into hours, minutes, and seconds
		var timeComponents = timeString.split(':');

		// Extract hours, minutes, and seconds
		var hours = parseInt(timeComponents[0]);
		var minutes = parseInt(timeComponents[1]);
		var seconds = parseInt(timeComponents[2]);

		// Convert total minutes
		var totalMinutes = hours * 60 + minutes;

		// Calculate hours and minutes in the new format
		var newHours = Math.floor(totalMinutes / 60);
		var newMinutes = totalMinutes % 60;

		// Construct the new time format string
		var newTimeFormat = '';
		if (newHours > 0) {
			newTimeFormat += newHours + ' hr ';
		}
		if (newMinutes > 0 || totalMinutes === 0) {
			// Handle the case when totalMinutes is 0
			newTimeFormat += newMinutes + ' mins';
		}

		return newTimeFormat;
	}

	return (
		<>
			<div
				className={`fixed inset-0 bg-cover bg-center bg-blur -z-50 bg-[url("https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] filter blur-sm contrast-125 brightness-50 `}></div>

			<div className='ms:px-20 py-12 h-full w-full cursor-context-menu'>
				<div className='grid lg:grid-cols-6 p-2 shadow-xl shadow-blue-gray-100 py-10 justify-items-center'>
					<div className='lg:col-span-2 px-4 border-l-blue-gray-400 lg:border-l border-t  h-full justify-items-center '>
						<img
							alt='demo'
							src={recipes && recipes.recipeImages[0]}
							className='w-full  mt-10 px-4 h-[28rem] object-cover sticky top-32 -z-20'
						/>
					</div>
					<div className='lg:col-span-4 md:px-24 text- backdrop-blur-2xl py-8 rounded-lg'>
						<div className='p-6 mb-4 border-b-2 border-gray-300 shadow-lg bg-blue-gray-50 rounded'>
							<Typography
								variant='h3'
								className='py-4 font-serif'>
								{''}
								{recipes && recipes.title}
							</Typography>
							<Typography
								variant='lead'
								className='text-md font-light'>
								{recipes && recipes.content}
							</Typography>
						</div>
						<div className='p-6 border-b-2 justify-center gap-1 border-gray-300 shadow-lg flex  items-center bg-blue-gray-50 rounded flex-grow'>
							<div className='flex flex-wrap gap-1 flex-col md:flex-row flex-grow'>
								<div className='flex flex-col justify-center items-center gap-2 transition-all duration-500 ease-in-out hover:bg-blue-gray-200 p-2 rounded flex-grow '>
									<Typography
										variant='small'
										className='font-semibold'>
										Serving
									</Typography>
									<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
										<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
											<PiForkKnifeLight className='h-7 w-auto ' />
										</div>
									</div>
									<Typography variant='small'>
										{recipes && recipes.serving} People
									</Typography>
								</div>
								<div className='flex flex-col justify-center items-center gap-2 flex-grow transition-all duration-500 ease-in-out hover:bg-blue-gray-200 p-2 rounded '>
									<Typography
										variant='small'
										className='font-semibold'>
										Cooking Time
									</Typography>
									<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
										<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
											<GiCampCookingPot className='h-7 w-auto ' />
										</div>
									</div>
									<Typography variant='small'>
										{recipes && convertTimeFormat(recipes.cockingTime)}
									</Typography>
								</div>
								<div className='flex flex-col justify-center items-center gap-2 flex-grow transition-all duration-500 ease-in-out hover:bg-blue-gray-200 p-2 rounded '>
									<Typography
										variant='small'
										className='font-semibold'>
										Preparing Time
									</Typography>
									<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
										<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
											<IoIosTimer className='h-7 w-auto ' />
										</div>
									</div>
									<Typography variant='small'>
										{recipes && convertTimeFormat(recipes.preparingTime)}
									</Typography>
								</div>
							</div>
							<div className='flex flex-wrap gap-1 flex-col md:flex-row flex-grow'>
								<div className='flex flex-col justify-center items-center gap-2 flex-grow transition-all duration-500 ease-in-out hover:bg-blue-gray-200 p-2 rounded'>
									<Typography
										variant='small'
										className='font-semibold'>
										Baking
									</Typography>
									<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
										<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
											<LiaCookieBiteSolid className='h-7 w-auto ' />
										</div>
									</div>
									<Typography variant='small'>
										{recipes && convertTimeFormat(recipes.bakingTime)}
									</Typography>
								</div>
								<div className='flex flex-col justify-center items-center gap-2 transition-all duration-500 ease-in-out hover:bg-blue-gray-200 p-2 rounded flex-grow'>
									<Typography
										variant='small'
										className='font-semibold'>
										Resting Time
									</Typography>
									<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
										<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
											<GiSandsOfTime className='h-7 w-auto ' />
										</div>
									</div>
									<Typography variant='small'>
										{' '}
										{recipes && convertTimeFormat(recipes.restingTime)}
									</Typography>
								</div>
								<div className='flex flex-col justify-center items-center gap-2 transition-all duration-500 ease-in-out hover:bg-blue-gray-200 p-2 rounded flex-grow'>
									<Typography
										variant='small'
										className='font-semibold'>
										Total Time
									</Typography>
									<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
										<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
											<IoMdTime className='h-7 w-auto ' />
										</div>
									</div>
									<Typography variant='small'>
										{recipes && convertTimeFormat(recipes.totalTime)}
									</Typography>
								</div>
							</div>
						</div>

						<div className='p-2 mt-6 w-full h-96'>
							<img
								src='https://plus.unsplash.com/premium_photo-1667899358081-bd3131cc6bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								className='shadow-blue-gray-400 rounded-md shadow-lg object-cover'
							/>
						</div>

						<div className='py-6 '>
							<Card className='w-full border-gray-300 shadow-lg bg-blue-gray-50 rounded'>
								<Typography
									variant='h5'
									className='py-4 font-serif'>
									Ingredients
								</Typography>

								<List>
									{recipes &&
										recipes.ingredient &&
										recipes.ingredient.map((item) => (
											<ListItem
												className='flex items-center gap-1'
												key={item.id}>
												<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />
												<Typography
													variant='paragraph'
													className='font-semibold'>
													{item.quantity} {item.volume} {item.unit}{' '}
													<span className='font-normal'>{item.ingredient}</span>
												</Typography>
											</ListItem>
										))}
								</List>
							</Card>
						</div>

						<div className='py-6 '>
							<div className='w-full border-gray-300 shadow-lg px-4 bg-blue-gray-50 rounded my-6'>
								<Typography
									variant='h5'
									className='py-4 font-serif'>
									Instructions
								</Typography>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://images.unsplash.com/photo-1599778150270-95d42678e08c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								{recipes &&
									recipes.mergedData &&
									recipes.mergedData.map((item, index) => (
										<div
											className='flex items-center gap-1 justify-evenly transition-all duration-500 ease-in-out hover:bg-blue-gray-200 py-2 px-3 rounded-md'
											key={index}>
											<div className='p-2 mt-6 w-full h-full'>
												<img
													src={item.image}
													className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-48'
												/>
											</div>
											<IoCheckmarkDone className='h-14 w-14 fill-[#008080]' />
											<Typography variant='small'>{item.text}</Typography>
										</div>
									))}
							</div>
						</div>
						<div className='flex flex-col justify-center gap-4 bg-amber-100 hover:bg-amber-200 py-10 px-12 rounded-md'>
							<Typography
								variant='paragraph'
								className='font-semibold text-xl font-serif'>
								{' '}
								Notes:-
							</Typography>

							<Typography variant='small'>
								<span
									variant='paragraph'
									className='font-semibold text-xl font-serif'>
									Kid-Friendly Adaptation:
								</span>{' '}
								Cook the chicken in broth instead of buffalo sauce. Shred and
								drain off excess liquid. Put some of the chicken aside for the
								kiddos (plain, no sauce) and toss the remaining chicken with the
								buffalo sauce before you broil it.
							</Typography>
						</div>

						<div className='flex justify-center flex-wrap gap-4 bg-blue-gray-50 p-4 rounded-md my-4'>
							<div className='text-gray-600 flex items-center'>
								<FcChargeBattery />
								<Typography variant='small'>
									<span
										variant='paragraph'
										className='font-semibold text-md font-serif'>
										Calories:
									</span>{' '}
									{recipes && recipes.calories}kcal
								</Typography>
							</div>
							<div className='text-gray-600 flex items-center'>
								<FcAcceptDatabase />
								<Typography variant='small'>
									<span
										variant='paragraph'
										className='font-semibold text-md font-serif'>
										Course:
									</span>{' '}
									{recipes && recipes.course.toUpperCase()}
								</Typography>
							</div>
							<div className='text-gray-600 flex items-center'>
								<FcGlobe />
								<Typography variant='small'>
									<span
										variant='paragraph'
										className='font-semibold text-md font-serif'>
										Cuisine:
									</span>{' '}
									{recipes && recipes.cuisine.toUpperCase()}
								</Typography>
							</div>
							<div className='text-gray-600 flex items-center'>
								<AiOutlineTags />
								<Typography variant='small'>
									<span
										variant='paragraph'
										className='font-semibold text-md font-serif'>
										Keyword:
									</span>{' '}
									{recipes && recipes.keyword.toUpperCase()}
								</Typography>
							</div>
						</div>
						<div className='w-full bg-blue-gray-50 rounded'>
							<UserCard />
						</div>
					</div>
				</div>
				<div className='w-full xl:px-40 pt-20'>
					<NewsLetterCard />
				</div>
			</div>
		</>
	);
}

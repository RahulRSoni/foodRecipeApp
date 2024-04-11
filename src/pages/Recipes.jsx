import React from 'react';
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

export default function RecipePage() {
	return (
		<div className='px-20 py-20 h-full w-full '>
			<div className='grid lg:grid-cols-6 p-2 shadow-xl shadow-blue-gray-100 py-10'>
				<div className='lg:col-span-2 px-4 border-l-blue-gray-400 lg:border-l border-t  h-full justify-items-center '>
					<img
						alt='demo'
						src='https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className='w-auto  mt-10 px-4 h-[32rem] object-cover sticky top-32 -z-20'
					/>
				</div>
				<div className='lg:col-span-4 px-24 '>
					<div className='p-6 mb-4 border-b-2 border-gray-300 shadow-lg'>
						<Typography
							variant='h3'
							className='py-4 font-serif'>
							Rose Syrup Ice Tea
						</Typography>
						<Typography
							variant='lead'
							className='text-md font-light'>
							<span className='font-thin text-lg text-blue-gray-300 text-pretty translate-x-2'>
								T
							</span>
							hese small but sophisticated blender cakes are not only
							eye-catching, but full of bright flavor. The rosemary syrup glaze
							is a must to complete the flavor profile.
						</Typography>
					</div>
					<div className='py-6 border-b-2 justify-evenly  border-gray-300 shadow-lg flex  items-center '>
						<div className='flex flex-col justify-center items-center gap-2'>
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
							<Typography variant='small'>4 People</Typography>
						</div>
						<div className='flex flex-col justify-center items-center gap-2'>
							<Typography
								variant='small'
								className='font-semibold'>
								Cook Time
							</Typography>
							<div className='border border-blue-gray-100 rounded-full h-16 w-16 flex justify-center items-center'>
								<div className='border border-blue-gray-100 rounded-full h-10 w-10 flex justify-center items-center'>
									<GiCampCookingPot className='h-7 w-auto ' />
								</div>
							</div>
							<Typography variant='small'>30 mins</Typography>
						</div>
						<div className='flex flex-col justify-center items-center gap-2'>
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
							<Typography variant='small'>1 hr 30 mins</Typography>
						</div>
						<div className='flex flex-col justify-center items-center gap-2'>
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
							<Typography variant='small'> 20 mins</Typography>
						</div>
						<div className='flex flex-col justify-center items-center gap-2'>
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
							<Typography variant='small'>2 hr 20 mins</Typography>
						</div>
						<div className='flex flex-col justify-center items-center gap-2'>
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
							<Typography variant='small'> 10 mins</Typography>
						</div>
					</div>

					<div className='p-2 mt-6 w-full h-96'>
						<img
							src='https://plus.unsplash.com/premium_photo-1667899358081-bd3131cc6bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							className='shadow-blue-gray-400 rounded-md shadow-lg object-cover'
						/>
					</div>

					<div className='py-6 '>
						<Card className='w-full border-gray-300 shadow-lg'>
							<Typography
								variant='h5'
								className='py-4 font-serif'>
								Ingredients
							</Typography>
							<List>
								<ListItem className='flex items-center gap-1'>
									<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />
									<Typography
										variant='paragraph'
										className='font-semibold'>
										1 cup
									</Typography>
									<Typography variant='small'>whole raw almonds</Typography>
								</ListItem>
								<ListItem className='flex items-center gap-1'>
									<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />

									<Typography
										variant='paragraph'
										className='font-semibold'>
										1½ tbsp
									</Typography>
									<Typography variant='small'>fresh rosemary</Typography>
								</ListItem>
								<ListItem className='flex items-center gap-1'>
									<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />
									<Typography
										variant='paragraph'
										className='font-semibold'>
										1 cup
									</Typography>
									<Typography variant='small'>all purpose flour</Typography>
								</ListItem>
								<ListItem className='flex items-center gap-1'>
									<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />
									<Typography
										variant='paragraph'
										className='font-semibold'>
										1½ cups
									</Typography>
									<Typography variant='small'>
										whole milk ricotta cheese
									</Typography>
								</ListItem>
								<ListItem className='flex items-center gap-1'>
									<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />
									<Typography
										variant='paragraph'
										className='font-semibold'>
										⅔ cup
									</Typography>
									<Typography variant='small'>
										extra virgin olive oil
									</Typography>
								</ListItem>
								<ListItem className='flex items-center gap-1'>
									<AiOutlineDingtalk className='h-6 w-6 fill-[#008080]' />
									<Typography
										variant='paragraph'
										className='font-semibold'>
										3 grams
									</Typography>
									<Typography variant='small'>blood oranges</Typography>
								</ListItem>
							</List>
						</Card>
					</div>

					<div className='py-6'>
						<div className='w-full border-gray-300 shadow-lg'>
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
							<div className='flex items-center gap-4 hover:bg-blue-gray-50 py-2 px-3 rounded-md'>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								<IoCheckmarkDone className='h-14 w-14 fill-[#008080]' />
								<Typography variant='small'>
									Preheat oven to 350ºF/180ºC/gas 4. Generously spray two 12-cup
									muffin pans with cooking spray. Sprinkle the bottom of each
									cavity with a couple pinches of sugar. Set aside.
								</Typography>
							</div>
							<div className='flex items-center gap-4 hover:bg-blue-gray-50 py-2 px-3 rounded-md'>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								<IoCheckmarkDone className='h-28 w-28 fill-[#008080]' />
								<Typography variant='small'>
									Add almonds and rosemary to your KitchenAid® K400 Blender.
									Close lid, select “Ice Crush” setting, and let blender run
									through the setting. Scrape down the sides of the blender with
									a rubber spatula, then replace lid and blend on speed 5 for 10
									seconds. Scrape sides again and blend on speed 5 for a final
									15-20 seconds, or until almonds and rosemary are finely
									ground.
								</Typography>
							</div>

							<div className='flex items-center gap-4 hover:bg-blue-gray-50 py-2 px-3 rounded-md'>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://plus.unsplash.com/premium_photo-1666497635505-fbe5ef5062f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								<IoCheckmarkDone className='h-12 w-12 fill-[#008080]' />
								<Typography variant='small'>
									Pour the almond mixture from blender in a small mixing bowl.
									Add all-purpose flour, baking powder, baking soda, and salt.
									Whisk to combine, and set aside.
								</Typography>
							</div>

							<div className='flex items-center gap-4 hover:bg-blue-gray-50 py-2 px-3 rounded-md'>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								<IoCheckmarkDone className='h-14 w-14 fill-[#008080]' />
								<Typography variant='small'>
									Place ricotta cheese, olive oil, orange zest and sugar into
									the blender. Pulse 5 times to incorporate. Remove the lid cap
									and add eggs, one at a time, pulsing once after each addition.
									Replace lid cap.
								</Typography>
							</div>

							<div className='flex items-center gap-4 hover:bg-blue-gray-50 py-2 px-3 rounded-md'>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://images.unsplash.com/photo-1579242063500-ce26694c5ddf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								<IoCheckmarkDone className='h-20 w-20 fill-[#008080]' />
								<Typography variant='small'>
									Assemble the cakes. Use a sharp knife to cut off the ends of
									four of the citrus fruits. Slice the citrus into very thin
									rounds, no thicker than 1/8". Remove any seeds from the rounds
									and place one small citrus round in the bottom of each sugared
									muffin cavity. (See Chef’s Notes for choosing/placing citrus.)
								</Typography>
							</div>
							<div className='flex items-center gap-4 hover:bg-blue-gray-50 py-2 px-3 rounded-md'>
								<div className='p-2 mt-6 w-full h-full'>
									<img
										src='https://images.unsplash.com/photo-1424591093900-514bab956faf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										className='shadow-blue-gray-400 rounded-md shadow-lg object-cover h-48 w-full'
									/>
								</div>
								<IoCheckmarkDone className='h-20 w-20 fill-[#008080]' />
								<Typography variant='small'>
									Slowly fill each muffin cavity to a little more than halfway
									full. (A pastry spatula is helpful in portioning the batter
									from the blender and into the cavities.) Bake cakes for 20-25
									minutes, rotating the pans halfway through baking. Cakes are
									done when a toothpick inserted into the cakes comes out clean.
								</Typography>
							</div>
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
								30kcal
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
								30kcal
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
								30kcal
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
								30kcal
							</Typography>
						</div>
					</div>
					<div className='w-full '>
						<UserCard />
					</div>
				</div>
			</div>
			<div className='w-full xl:px-40 pt-20'>
				<NewsLetterCard />
			</div>
		</div>
	);
}

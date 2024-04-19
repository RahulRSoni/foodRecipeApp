import React from 'react';
import { NewsLetterCard } from '../components/Card/NewsLetterCard';
import { BlogCard } from '../components/Card/ItemCard';
import CardPlaceholderSkeleton from '../components/Loaders/Skeleton';
import { Select, Option, Input } from '@material-tailwind/react';
import { FcSearch } from 'react-icons/fc';

export default function RecipeIndex() {
	return (
		<>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1587200292891-9b3a506060f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>
			<div className='px-8 py-24 h-full w-full '>
				<div className='h-full flex justify-end '>
					<img
						src='https://images.unsplash.com/photo-1587200292891-9b3a506060f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						className='h-[22rem] w-[37rem] object-fill rounded-lg'
					/>
				</div>
				<div className='flex flex-col-reverse p-2 shadow-xl z-50 shadow-blue-gray-100 mt-10 rounded-lg bg-blue-gray-50 backdrop-blur-sm '>
					<div className='flex flex-wrap gap-x-6 gap-y-8 justify-center py-10'>
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<CardPlaceholderSkeleton />
					</div>

					<div className='lg:col-span-1 px-4 border-l-blue-gray-400  border-b  h-full justify-items-center py-10 w-full z-50'>
						<div className='w-full flex  gap-4 justify-center items-center sticky top-32'>
							<div className='relative w-full gap-2 md:w-max'>
								<Input
									type='search'
									placeholder='Search'
									className=' !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300'
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
								/>
								<div className='!absolute left-3 top-[13px]'>
									<FcSearch />
								</div>
							</div>
							<Select
								label='Categories'
								animate={{
									mount: { y: 0 },
									unmount: { y: 25 },
								}}>
								<Option>Appetizer</Option>
								<Option>Vegan</Option>
								<Option>Tandoori</Option>
								<Option>Chicken</Option>
								<Option>Sweets</Option>
								<Option>Salad</Option>
								<Option>Pasta</Option>
								<Option>Chinese</Option>
								<Option>Beverages</Option>
								<Option>Bakery</Option>
								<Option>Soup</Option>
							</Select>
							<Select
								label='Cuisines'
								animate={{
									mount: { y: 0 },
									unmount: { y: 25 },
								}}>
								<Option>American</Option>
								<Option>Turki's</Option>
								<Option>Chinese</Option>
								<Option>French</Option>
								<Option>Indian</Option>
								<Option>Italian</Option>
								<Option>Mexican</Option>
							</Select>
							<Select
								label='Courses'
								animate={{
									mount: { y: 0 },
									unmount: { y: 25 },
								}}>
								<Option>Appetizer</Option>
								<Option>Breakfast</Option>
								<Option>Dessert</Option>
								<Option>Drinks</Option>
								<Option>Main Course</Option>
								<Option>Staters</Option>
								<Option>Snack</Option>
								<Option>Salad</Option>
							</Select>
							<Select
								label='Keywords'
								animate={{
									mount: { y: 0 },
									unmount: { y: 25 },
								}}>
								<Option>Bakery </Option>
								<Option>Berry</Option>
								<Option>Coffee</Option>
								<Option>Cookie</Option>
								<Option>Meat</Option>
								<Option>Quick & Easy</Option>
								<Option>Sauce</Option>
								<Option>Smoothie</Option>
								<Option>Soup</Option>
								<Option>Spaghetti</Option>
								<Option>Syrup</Option>
								<Option>Tea</Option>
								<Option>Toast</Option>
								<Option>Vegetable</Option>
							</Select>
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

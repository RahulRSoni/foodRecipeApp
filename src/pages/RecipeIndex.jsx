import React, { useState, useEffect } from 'react';
import { NewsLetterCard } from '../components/Card/NewsLetterCard';
import { BlogCard } from '../components/Card/ItemCard';
import CardPlaceholderSkeleton from '../components/Loaders/Skeleton';
import { Select, Option, Input } from '@material-tailwind/react';
import { FcSearch } from 'react-icons/fc';
import { getAllRecipe } from '../api/store.services';
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import { useParams } from 'react-router-dom';

export default function RecipeIndex() {
	const params = useParams();

	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [inputData, setInputData] = useState('');
	const [cuisineData, setCuisineData] = useState('');
	const [keywordData, setKeywordData] = useState('');
	const [courseData, setCourseData] = useState(params.courses || '');

	const handleInputSearch = debounce(() => {
		const filtered = recipes
			.filter(
				(res) =>
					inputData.trim() === '' ||
					res.recipe.slug.includes(inputData) ||
					res.recipe.title.includes(inputData),
			)
			.filter((res) => cuisineData === '' || res.recipe.cuisine === cuisineData)
			.filter((res) => courseData === '' || res.recipe.course === courseData)
			.filter(
				(res) => keywordData === '' || res.recipe.keyword === keywordData,
			);

		setFilteredRecipes(filtered);
	}, 300);

	useEffect(() => {
		async function fetchRecipes() {
			try {
				setLoading(true);
				const recipeData = await getAllRecipe();
				setRecipes(recipeData);
				setFilteredRecipes(recipeData);
			} catch (error) {
				toast.error(`Error fetching recipes: ${error.message || error}`);
			} finally {
				setLoading(false);
			}
		}
		fetchRecipes();
	}, []);

	useEffect(() => {
		handleInputSearch();
	}, [inputData, cuisineData, recipes, keywordData, courseData]);

	useEffect(() => {
		setCourseData(params.courses || '');
	}, [params.courses]);

	return (
		<>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1587200292891-9b3a506060f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
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
						{loading ? (
							<CardPlaceholderSkeleton />
						) : filteredRecipes.length > 0 ? (
							filteredRecipes.map((recipe) => (
								<BlogCard
									key={recipe.id}
									data={recipe}
								/>
							))
						) : (
							<p>No results found.</p>
						)}
					</div>
					{params.courses ? (
						<span className='m-6 text-xl font-semibold text-blue-gray-600 border-b-4 border-gray-400 '>
							{params.courses.toUpperCase()}
						</span>
					) : (
						<div className='lg:col-span-1 px-4 border-l-blue-gray-400 border-b h-full justify-items-center py-10 w-full sticky top-20 bg-white z-50'>
							<div className='w-full flex gap-4 justify-center items-center sticky flex-wrap top-32'>
								<div className='relative w-full gap-2 md:w-max'>
									<Input
										type='search'
										placeholder='Search'
										className='!border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300'
										labelProps={{
											className: 'before:content-none after:content-none',
										}}
										onChange={(e) => setInputData(e.target.value)}
									/>
									<div className='!absolute left-3 top-[13px]'>
										<FcSearch />
									</div>
								</div>
								<div className='md:w-max w-full'>
									<Select
										label='Cuisines'
										onChange={(val) => setCuisineData(val)}
										animate={{
											mount: { y: 0 },
											unmount: { y: 25 },
										}}>
										<Option value=''>Select a cuisine</Option>
										<Option value='american'>American</Option>
										<Option value='turkish'>Turkish</Option>
										<Option value='chinese'>Chinese</Option>
										<Option value='french'>French</Option>
										<Option value='indian'>Indian</Option>
										<Option value='italian'>Italian</Option>
										<Option value='mexican'>Mexican</Option>
									</Select>
								</div>
								<div className='md:w-max w-full'>
									<Select
										label='Courses'
										onChange={(val) => setCourseData(val)}
										animate={{
											mount: { y: 0 },
											unmount: { y: 25 },
										}}>
										<Option value=''>Select a course</Option>
										<Option value='appetizer'>Appetizer</Option>
										<Option value='breakfast'>Breakfast</Option>
										<Option value='dessert'>Dessert</Option>
										<Option value='drinks'>Drinks</Option>
										<Option value='mainCourse'>Main Course</Option>
										<Option value='staters'>Staters</Option>
										<Option value='snacks'>Snacks</Option>
										<Option value='salad'>Salad</Option>
									</Select>
								</div>
								<div className='md:w-max w-full'>
									<Select
										label='Keywords'
										onChange={(val) => setKeywordData(val)}
										animate={{
											mount: { y: 0 },
											unmount: { y: 25 },
										}}>
										<Option value=''>Select a keyword</Option>
										<Option value='bakery'>Bakery </Option>
										<Option value='berry'>Berry</Option>
										<Option value='coffee'>Coffee</Option>
										<Option value='cookie'>Cookie</Option>
										<Option value='meat'>Meat</Option>
										<Option value='quickAndEasy'>Quick & Easy</Option>
										<Option value='sauce'>Sauce</Option>
										<Option value='smoothie'>Smoothie</Option>
										<Option value='soup'>Soup</Option>
										<Option value='spaghetti'>Spaghetti</Option>
										<Option value='syrup'>Syrup</Option>
										<Option value='tea'>Tea</Option>
										<Option value='toast'>Toast</Option>
										<Option value='vegetable'>Vegetable</Option>
									</Select>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className='w-full xl:px-40 pt-20'>
					<NewsLetterCard />
				</div>
			</div>
		</>
	);
}

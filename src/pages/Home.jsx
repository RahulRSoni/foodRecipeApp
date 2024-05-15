// Import necessary components and libraries
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner.jsx';

import { Gallery } from '../components/CardGallery/Gallery.jsx';
import AboutCard from '../components/Card/AboutCard.jsx';
import { BlogCard } from '../components/Card/ItemCard.jsx';
import CardPlaceholderSkeleton from '../components/Loaders/Skeleton.jsx';
import { getAllImages, getAllRecipe } from '../api/store.services.js';
import { toast } from 'react-toastify';
import Spinner from '../components/Loaders/Spinner.jsx';

import { InfiniteMovingCardsDemo } from '../components/Moving Cards/InfiniteMovingCards.jsx';

function Home() {
	// State variables for recipes, allImages, and loading
	const [recipes, setRecipes] = useState(null);
	const [allImages, setAllImages] = useState(null);
	const [loading, setLoading] = useState(true);

	// Fetch recipes and images from APIs
	useEffect(() => {
		Promise.all([getAllRecipe(), getAllImages()])
			.then(([recipeData, imageData]) => {
				setRecipes(recipeData);
				setAllImages(imageData);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				toast.error('Error fetching data:', error.message);
			});
	}, []);

	// Function to generate random items from an array
	const generateRandomItems = (array, count) => {
		if (!array) return [];
		if (array.length < count) return [];
		const randomIndexes = [];
		while (randomIndexes.length < count) {
			const randomIndex = Math.floor(Math.random() * array.length);
			if (!randomIndexes.includes(randomIndex)) {
				randomIndexes.push(randomIndex);
			}
		}
		return randomIndexes.map((index) => array[index]);
	};

	// Generate random images
	const randomImages = generateRandomItems(allImages, 12);
	const randomImages2 = generateRandomItems(allImages, 12);

	// JSX for the Home component
	return (
		<>
			<div>
				<div
					className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
					style={{
						backgroundImage: `url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
						filter: 'blur(2px) contrast(120%) brightness(50%)',
					}}></div>
				<div className='px-5 sm:pt-24 pt-16'>
					<div className='flex justify-center items-center flex-grow  w-full bg-transparent'>
						{loading ? <Spinner /> : <Banner randomImages={randomImages} />}
					</div>
					<div className='flex justify-center items-center flex-grow  w-full bg-transparent'>
						{loading ? <Spinner /> : <Gallery randomImages={randomImages2} />}
					</div>

					<div className='grid lg:grid-cols-12 justify-items-center gap-1  py-12'>
						<div className='grid lg:col-span-9 justify-items-center backdrop-blur-sm h-full '>
							<span className='m-6 text-xl font-semibold text-blue-gray-100 border-b-4 border-gray-400 '>
								Update Recipes
							</span>
							<div className='flex flex-wrap gap-6 w-full'>
								{loading ? (
									<CardPlaceholderSkeleton />
								) : (
									recipes &&
									recipes.slice(0, 6).map((recipe) => (
										<BlogCard
											key={recipe.id}
											data={recipe}
										/>
									))
								)}
							</div>
						</div>
						<div className='lg:grid lg:col-span-3 px-2 bg-blue-gray-50 backdrop-blur-sm  rounded-lg hidden h-full'>
							<AboutCard />
						</div>
					</div>
				</div>
				<div className='mx-6  backdrop:blur-2xl rounded-2xl'>
					<InfiniteMovingCardsDemo />
				</div>
			</div>
		</>
	);
}

export default Home;

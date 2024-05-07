import Banner from '../components/Banner/Banner.jsx';
import Menu from '../components/FoodMenu/Menu.jsx';
import { Gallery } from '../components/gallery/gallery.jsx';
import AboutCard from '../components/Card/AboutCard.jsx';
import { BlogCard } from '../components/Card/ItemCard.jsx';
import CardPlaceholderSkeleton from '../components/Loaders/Skeleton.jsx';
import { useEffect, useState } from 'react';
import { getAllRecipe } from '../api/store.services.js';

function Home() {
	const [recipes, setRecipes] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		try {
			setLoading(true);
			getAllRecipe()
				.then((recipeData) => {
					setRecipes(recipeData);
					setLoading(false);
				})
				.catch((error) => {
					setLoading(true);
					toast.error('Error fetching recipes:', error.message);
				});
		} catch (error) {
			setLoading(true);
			toast.error('Error fetching recipes:', error.message);
		}
	}, []);
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
					<Banner />
					<Gallery />
					<Menu />
					<div className='grid lg:grid-cols-12  justify-items-center gap-8 sm:pl-24 py-12'>
						<div className='grid lg:col-span-8 justify-items-center backdrop-blur-sm h-full lg:h-0'>
							<div className='flex flex-wrap gap-6  w-full'>
								{loading ? (
									<CardPlaceholderSkeleton />
								) : (
									recipes &&
									recipes.map((recipe) => (
										<BlogCard
											key={recipe.id}
											data={recipe}
										/>
									))
								)}
							</div>
						</div>
						<div className='lg:grid lg:col-span-4 px-2  bg-blue-gray-50 backdrop-blur-sm  rounded-lg hidden h-full'>
							<AboutCard />
						</div>
					</div>
				</div>
				)
			</div>
		</>
	);
}

export default Home;

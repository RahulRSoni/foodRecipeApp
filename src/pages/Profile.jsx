import React, { useEffect, useState } from 'react';
import { ProfileEditor } from '../components/Dialog/ProfileEditor';
import UpdatePassword from '../components/Dialog/UpdatePassword';
import { useSelector } from 'react-redux';
import { BlogCard2 } from '../components/Card/ItemCard2';

import { useNavigate } from 'react-router-dom';
import { deleteRecipe, getUserRecipe } from '../api/store.services';
import Spinner from '../components/Spinner/Spinner.jsx';
import { toast } from 'react-toastify';
import { Button } from '@material-tailwind/react';

export default function Profile() {
	const { currentUser } = useSelector((state) => state.user);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	// Function to format the createdAt timestamp
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

	function capitalizeFirstLetterOfEachWord(str) {
		// Split the string into words
		const words = str.split(' ');

		// Capitalize the first letter of each word
		const capitalizedWords = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});

		// Join the capitalized words back into a string
		return capitalizedWords;
	}

	useEffect(() => {
		const userEmail = currentUser.email;
		try {
			getUserRecipe(userEmail)
				.then((recipeData) => {
					setData(recipeData);
					setLoading(false);
				})
				.catch((error) => {
					toast.error('Error fetching recipes:', error);
					setLoading(false);
				});
		} catch (error) {
			toast.error('Error fetching recipes:', error);
			setLoading(false);
		}
	}, []);

	const onDelete = async (recipe) => {
		if (window.confirm('Are you sure you want to delete?')) {
			try {
				const recipeId = await deleteRecipe(recipe);

				// Ensure that data is an array before attempting to filter it
				if (Array.isArray(data)) {
					// Filter out the deleted recipe from the data array using its ID
					const updatedRecipes = data.filter(
						(recipe) => recipe.id !== recipeId,
					);
					setData(updatedRecipes);
					toast.success('Recipe has been deleted successfully');
				} else {
					console.error('Data is not an array:', data);
					toast.error('Failed to delete recipe. Please try again.');
				}
			} catch (error) {
				console.error('Error deleting recipe:', error);
				toast.error('Failed to delete recipe. Please try again.');
			}
		}
	};

	const onEdit = (data) => {
		navigate(`/recipe/editPost/${data.id}`);
	};
	return (
		<>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1517856497829-3047e3fffae1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>
			<div className='  h-max-full w-max-full border-radius shadow-lg shadow-blue-gray-200 rounded-xl pt-16 mx-5 '>
				<div className='mx-auto my-5 p-5 w-full'>
					<div className='lg:flex lg:flex-no-wrap lg:-mx-2 '>
						<div className='w-full lg:w-3/12 lg:mx-2 '>
							<div className=' p-3 border-t-4 border-green-400 bg-blue-gray-50 backdrop-blur-sm py-8 rounded-lg'>
								<div className='overflow-hidden'>
									<img
										className='h-[20.4rem] w-full mx-auto'
										src={currentUser.photoURL || ''}
										alt=''
									/>
								</div>
								<h1 className='text-gray-900 font-bold text-xl leading-8 m-1'>
									{capitalizeFirstLetterOfEachWord(
										currentUser ? currentUser.displayName : 'Rahul Soni',
									).join(' ')}
								</h1>

								<h3 className='text-gray-600 font-lg text-semibold leading-6 m-1'>
									About Myself
								</h3>

								<p className='text-sm text-gray-500 hover:text-gray-600 leading-6 m-1'>
									{currentUser ? currentUser.about : 'Rahul Soni'}
								</p>
								<ul className='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
									<li className='flex items-center py-3'>
										<span>Status</span>
										<span className='ml-auto'>
											<span className='bg-green-500 py-1 px-2 rounded text-white text-sm'>
												Active
											</span>
										</span>
									</li>
									<li className='flex items-center py-3'>
										<span>News Latter</span>
										<span className='ml-auto text-left'>
											{false ? (
												<div className='bg-green-500 py-1 px-2 rounded text-white text-sm'>
													Subscribed
												</div>
											) : (
												<div className='bg-red-600 py-1 px-2 rounded text-white text-sm'>
													Not Subscribe
												</div>
											)}
										</span>
									</li>
									<li className='flex items-center py-3'>
										<span>Member since</span>
										<span className='ml-auto'>
											{currentUser
												? formatMemberSince(currentUser.timestamp.seconds)
												: ''}
										</span>
									</li>
								</ul>
							</div>
						</div>

						<div className='w-full lg:w-9/12 lg:mx-2  h-full bg-blue-gray-50 backdrop-blur-sm rounded-lg p-8 lg:my-0 my-4'>
							<div className='bg-white p-3 shadow-sm rounded-sm w-full'>
								<div className='flex items-center gap-5 font-semibold text-gray-900 leading-8 '>
									<span className='tracking-wide text-xl'>About Me</span>
									<ProfileEditor user={currentUser} />
									<UpdatePassword />
								</div>
								<div className='text-gray-700 py-5 w-full'>
									<div className='flex flex-wrap text-sm '>
										<div className='grid grid-cols-2'>
											<div className='px-4 py-2 font-semibold'>User Name</div>
											<div className='py-2'>
												{capitalizeFirstLetterOfEachWord(
													currentUser ? currentUser.displayName : 'Rahul Soni',
												).join(' ')}
											</div>
										</div>
										<div className='grid grid-cols-2'>
											<div className='px-4 py-2 font-semibold'>Contact No.</div>
											<div className='py-2 '>
												{' '}
												{currentUser ? currentUser.phoneNumber : ''}
											</div>
										</div>

										<div className='grid grid-cols-3 w-56'>
											<div className='px-4 py-2 font-semibold'>Email.</div>
											<div className='py-2 w-1'>
												<a
													className='text-blue-800 '
													href={currentUser ? currentUser.email : ''}>
													{currentUser ? currentUser.email : ''}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='my-4'></div>

							<div className='bg-white p-3 shadow-sm rounded-sm'>
								<div className='flex justify-between px-4'>
									<div className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3'>
										<span className='text-green-500'>
											<svg
												className='h-5'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
												/>
											</svg>
										</span>
										<span className='tracking-wide'>My Recipes</span>
									</div>
									<div
										className='flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3 cursor-pointer'
										onClick={() => navigate('/recipe/addPost')}>
										<span className='text-green-500'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-6 h-6'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M12 4.5v15m7.5-7.5h-15'
												/>
											</svg>
										</span>
										<span className='tracking-wide'>Add More</span>
									</div>
								</div>
								<div className=' flex flex-wrap gap-6 justify-center items-center'>
									{loading ? (
										<Spinner />
									) : (
										data?.map((recipe, index) => (
											<div
												className='w-full sm:w-64'
												key={index}>
												<BlogCard2
													recipes={recipe}
													onDelete={() => onDelete(recipe)}
													onEdit={() => onEdit(recipe)}
												/>
											</div>
										))
									)}
								</div>
								<div className='flex justify-center items-center mt-10'>
									<Button
										variant='text'
										onClick={() => navigate('/recipe')}>
										For More...
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

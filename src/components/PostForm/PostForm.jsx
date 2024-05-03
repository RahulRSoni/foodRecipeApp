// PostForm.js
import React, { useCallback, useEffect, useState } from 'react';
import {
	Button,
	Input,
	Tooltip,
	Typography,
	IconButton,
	Textarea,
	Select,
	Option,
} from '@material-tailwind/react';
import { Controller, useForm } from 'react-hook-form';
import { CommentBox } from '../RecipeFrom/CommentBox';
import Ingredient from '../RecipeFrom/Ingredients';
import TimeInputs from '../RecipeFrom/TimeInputs';
import {
	createRecipes,
	storeImages,
	updateRecipe,
} from '../../api/store.services';
import { useNavigate } from 'react-router-dom';
import { FcUpload, FcHighPriority, FcApproval } from 'react-icons/fc';
import { toast } from 'react-toastify';

const PostForm = ({ posts, paramsId }) => {
	const navigate = useNavigate();
	// const userData = useSelector((state) => state.userData);
	const [files, setFiles] = useState([]);
	const [formData, setFormData] = useState({ imageURLs: [] });
	const [imageUploadError, setImageUploadError] = useState(false);
	const [imageUploadPercentage, setImageUploadPercentage] = useState('');
	const [post, setPost] = useState(posts || {});

	const handleFileUpload = (e) => {
		if (files.length > 0 && files.length + formData.imageURLs.length < 9) {
			const promises = [];

			const progressCallback = (progress) => {
				setImageUploadPercentage(progress);
			};

			for (let i = 0; i < files.length; i++) {
				promises.push(storeImages(files[i], progressCallback));
			}

			Promise.all(promises)
				.then((url) => {
					setFormData({
						...formData,
						imageURLs: formData.imageURLs.concat(url),
					});
					setImageUploadError(false);
				})
				.catch((error) => {
					setImageUploadError('Image upload failed (2 MB max per image)');
				});
		} else {
			setImageUploadError('You can only upload 8 images.');
		}
	};

	const { register, handleSubmit, watch, setValue, control, reset, formState } =
		useForm({
			defaultValues: {
				title: post?.title || '',
				slug: post?.slug || '',
				content: post?.content || '',
				status: post?.status || 'active',
				keyword: post?.keyword || '',
				cuisine: post?.cuisine || '',
				course: post?.course || '',
				calories: post?.calories || '',
				serving: post?.serving || '',
				preparingTime: post?.preparingTime || '',
				ingredient: post?.ingredient || '',
				recipesImages: post?.recipesImages || [],
				commentBox: post?.commentBox || '',
				cockingTime: post?.cockingTime || '',
				restingTime: post?.restingTime || '',
				totalTime: post?.totalTime || '',
				bakingTime: post?.bakingTime || '',
			},
		});

	const submit = async (data) => {
		// Asynchronous operation, like submitting the form data to a server

		try {
			const formDataWithImages = {
				...data,
				recipesImages: [...(post.recipesImages || [])],
			};

			if (paramsId) {
				const docRef = await updateRecipe(paramsId, formDataWithImages);
				if (docRef) {
					navigate(`/profile`);
					toast.success('Recipe post updated successfully');
				}
			} else {
				const docRef = await createRecipes(formDataWithImages);
				if (docRef) {
					reset();
					navigate(`/recipe/${docRef.id}`);
					toast.success('Recipe post created successfully');
				}
			}
		} catch (error) {
			toast.error('Something want wrong while creating post');
		}
	};
	const slugTransform = useCallback((value) => {
		if (value && typeof value === 'string')
			return value.trim().toLowerCase().replace(/\s/g, '-');

		return '';
	}, []);

	const handleDeleteExistingImage = (index) => {
		setPost((prevPost) => {
			const updatedPost = {
				...prevPost,
				recipesImages: prevPost.recipesImages.filter((_, i) => i !== index),
			};
			return updatedPost;
		});
	};

	const handleDeleteImage = (index) => {
		if (Array.isArray(formData.imageURLs)) {
			setFormData({
				...formData,
				imageURLs: formData.imageURLs.filter((_, i) => i !== index),
			});
		}
	};

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === 'title') {
				setValue('slug', slugTransform(value.title), {
					shouldValidate: true,
				});
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [watch, slugTransform, setValue]);

	return (
		<form onSubmit={handleSubmit(submit)}>
			<div className='flex flex-col justify-center items-center p-10 mt-8 mx-10'>
				<div className=' mb-4 flex flex-col justify-center gap-5 bg-blue-gray-50 backdrop-blur-sm py-8 rounded-lg px-6 mx-10'>
					<div className='flex md:flex-row flex-col gap-6'>
						<Input
							label='Title :'
							placeholder='Title'
							size='md'
							name='title'
							required
							{...register('title', { required: true })}
						/>
						<Input
							label='Slug :'
							placeholder='Slug'
							size='md'
							name='slug'
							{...register('slug', { required: true })}
							onInput={(e) => {
								setValue('slug', slugTransform(e.target.value), {
									shouldValidate: true,
								});
							}}
						/>
					</div>
					<div className='flex md:flex-row flex-col gap-6'>
						<Textarea
							label='Content'
							name='content'
							required
							{...register('content', { required: true })}
						/>
						<Controller
							name='status'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<Select
									label='Status'
									value='active'
									required
									{...field}>
									<Option value='active'>Active</Option>
									<Option value='inactive'>Inactive </Option>
								</Select>
							)}
						/>
					</div>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Basic Details
					</Typography>
					<TimeInputs
						control={control}
						register={register}
					/>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Contain:
					</Typography>
					<div className='flex justify-between w-full gap-2'>
						<div className='flex flex-col w-full gap-2 '>
							<Input
								label='Calories : kcal/100 grams or ml'
								type='number'
								size='md'
								name='calories'
								className='w-full'
								{...register('calories')}
							/>
							<Controller
								name='keyword'
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										required
										label='Keywords'
										animate={{
											mount: { y: 0 },
											unmount: { y: 25 },
										}}
										{...field}>
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
								)}
							/>
						</div>
						<div className='flex flex-col w-full  gap-2 '>
							<Controller
								name='course'
								control={control}
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										required
										label='Courses'
										animate={{
											mount: { y: 0 },
											unmount: { y: 25 },
										}}
										{...field}>
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
								)}
							/>
							<Controller
								name='cuisine'
								control={control}
								defaultValue='active'
								rules={{ required: true }}
								render={({ field }) => (
									<Select
										required
										label='Cuisines'
										animate={{
											mount: { y: 0 },
											unmount: { y: 25 },
										}}
										{...field}>
										<Option value=''>Select a cuisine</Option>
										<Option value='american'>American</Option>
										<Option value='turkish'>Turkish</Option>
										<Option value='chinese'>Chinese</Option>
										<Option value='french'>French</Option>
										<Option value='indian'>Indian</Option>
										<Option value='italian'>Italian</Option>
										<Option value='mexican'>Mexican</Option>
									</Select>
								)}
							/>
						</div>
					</div>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Ingredients:
					</Typography>
					<div className='flex flex-col gap-2 w-full'>
						<Ingredient
							control={control}
							register={register}
							setValue={setValue}
						/>
					</div>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Steps:
					</Typography>
					<CommentBox
						control={control}
						register={register}
					/>
					<div className='relative flex gap-2 w-full items-center'>
						<Tooltip
							placement='bottom'
							className='border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10'
							content={
								<div className='w-full'>
									<Typography
										color='blue-gray'
										className='font-medium font-serif '>
										Recipe Images (Any 8)
									</Typography>
									<ol>
										<li>
											<Typography
												variant='lead'
												color='blue-gray'
												className='text-sm opacity-80'>
												1 x Recipe
											</Typography>
										</li>
										<li>
											<Typography
												variant='lead'
												color='blue-gray'
												className='text-sm opacity-80'>
												1 x Ingredient
											</Typography>
										</li>
										<li>
											<Typography
												variant='lead'
												color='blue-gray'
												className='text-sm opacity-80'>
												6 x Steps-wise Images
											</Typography>
										</li>
									</ol>
								</div>
							}>
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
									d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
								/>
							</svg>
						</Tooltip>
						<Input
							label='Recipes Images :'
							size='md'
							type='file'
							name='recipesImages'
							multiple={8} // Limiting to 6 images
							accept='image/png, image/jpg, image/jpeg, image/gif'
							onChange={(e) => setFiles(e.target.files)}
						/>

						<Tooltip
							placement='top'
							className='border border-blue-gray-50 bg-white shadow-xl shadow-black/10'
							content={
								<Typography
									color='blue-gray'
									className='font-medium font-serif'>
									Upload
								</Typography>
							}>
							<IconButton
								variant='text'
								onClick={handleFileUpload}
								className='!absolute right-1 top-1 rounded w-8 h-8'
								disabled={files.length > 8}>
								{imageUploadError ? (
									<FcHighPriority className='w-6 h-6' />
								) : imageUploadPercentage > 0 && imageUploadPercentage < 100 ? (
									<span>{`${imageUploadPercentage} %`}</span>
								) : imageUploadPercentage === 100 ? (
									<FcApproval className=' w-6 h-6' />
								) : (
									<FcUpload className='w-6 h-6' />
								)}
							</IconButton>
						</Tooltip>
					</div>
					<p className='py-2 text-red-400'>
						{imageUploadError && imageUploadError}
					</p>
					{formData.imageURLs.length > 0 && (
						<div>
							<Typography variant='h6'>Uploaded Images:</Typography>
							<ul className='flex flex-wrap justify-evenly'>
								{formData.imageURLs.map((url, index) => (
									<li
										key={index}
										className='flex items-center relative'>
										<img
											src={url}
											alt='Uploaded'
											className='w-28 h-24 mr-2 mt-4 object-cover'
										/>
										<IconButton
											onClick={() => handleDeleteImage(index)}
											className='absolute -top-2 -right-2 rounded-full p-0 bg-red-500 text-white text-xs font-semibold'>
											<span>X</span>
										</IconButton>
									</li>
								))}
							</ul>
						</div>
					)}
					{post && post.recipesImages && post.recipesImages.length > 0 && (
						<div>
							<Typography variant='h6'>Existing Images:</Typography>
							<ul className='flex flex-wrap justify-evenly'>
								{post.recipesImages.map((url, index) => (
									<li
										key={`existing-${index}`}
										className='flex items-center relative'>
										<img
											src={url}
											alt='Uploaded'
											className='w-28 h-24 mr-2 mt-4 object-cover'
										/>
										<IconButton
											onClick={() => handleDeleteExistingImage(index)}
											className='absolute -top-2 -right-2 rounded-full p-0 bg-red-500 text-white text-xs font-semibold'>
											<span>X</span>
										</IconButton>
									</li>
								))}
							</ul>
						</div>
					)}

					<Button
						size='sm'
						type='submit'
						disabled={!formState.isValid}
						className=' bg-green-500'>
						{post ? 'Update' : 'Submit'}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default PostForm;

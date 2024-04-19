// PostForm.js
import React, { useCallback, useEffect } from 'react';
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
import { createRecipes } from '../../api/store.services';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ post }) => {
	const navigate = useNavigate();
	// const userData = useSelector((state) => state.userData);
	const { register, handleSubmit, watch, setValue, control, reset } = useForm({
		defaultValues: {
			title: post?.title || '',
			slug: post?.slug || '',
			content: post?.content || '',
			status: post?.status || 'active',
			featuredImages: post?.featuredImages || [],
			keyword: post?.keyword || '',
			cuisine: post?.cuisine || '',
			course: post?.course || '',
			calories: post?.calories || '',
			serving: post?.serving || '',
			preparingTime: post?.preparingTime || '',
			cockingTime: post?.cockingTime || '',
			restingTime: post?.restingTime || '',
			totalTime: post?.totalTime || '',
			bakingTime: post?.bakingTime || '',
			featuredImages2: post?.featuredImages2,
		},
	});

	const submit = async (data) => {
		try {
			// Asynchronous operation
			console.log(data);

			const recipe = await createRecipes(data);

			if (recipe) {
				reset();
				navigate('profile');
			}
		} catch (error) {
			console.error('Error occurred:', error);
		}
	};
	const slugTransform = useCallback((value) => {
		if (value && typeof value === 'string')
			return value.trim().toLowerCase().replace(/\s/g, '-');

		return '';
	}, []);

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
			<div className='flex flex-col justify-center items-center p-10 mt-8 '>
				<div className=' mb-4 flex flex-col justify-center gap-5 bg-blue-gray-50 backdrop-blur-sm py-8 rounded-lg px-6'>
					<Input
						label='Title :'
						placeholder='Title'
						size='md'
						name='title'
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
					<div className='relative flex gap-2 w-full'>
						<Input
							label='Featured Image :'
							size='md'
							type='file'
							name='featuredImages'
							accept='image/png, image/jpg, image/jpeg, image/gif'
							{...register('featuredImages', { required: !post })}
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
								className='!absolute right-1 top-1 rounded w-8 h-8'>
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
										d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
									/>
								</svg>
							</IconButton>
						</Tooltip>
						{post && (
							<div className='w-full mb-4 flex item-center border-r-2 border-blue-gray-100'>
								<img
									src={post.getFilePreview(post.featuredImage)}
									alt={post.title}
									className='rounded-lg'
								/>
							</div>
						)}
					</div>
					<Textarea
						label='Content'
						name='content'
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
								{...field}>
								<Option value='active'>Active</Option>
								<Option value='inactive'>Inactive </Option>
							</Select>
						)}
					/>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Basic Details
					</Typography>
					<TimeInputs
						control={control}
						register={register}
					/>
					<div className='relative flex gap-2 w-full'>
						<Input
							label='Featured Image 2:'
							size='md'
							type='file'
							accept='image/png, image/jpg, image/jpeg, image/gif'
							{...register('featuredImages2', { required: !post })}
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
								className='!absolute right-1 top-1 rounded w-8 h-8'>
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
										d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
									/>
								</svg>
							</IconButton>
						</Tooltip>
						{post && (
							<div className='w-full mb-4 flex item-center border-r-2 border-blue-gray-100'>
								<img
									src={post.getFilePreview(post.featuredImage)}
									alt={post.title}
									className='rounded-lg'
								/>
							</div>
						)}
					</div>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Contain:
					</Typography>
					<div className='flex justify-between w-full gap-2'>
						<div className='flex flex-col w-full gap-2 '>
							<Input
								label='Calories : kcal'
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

					<Button
						size='sm'
						type='submit'
						className=' bg-green-500'>
						{post ? 'Update' : 'Submit'}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default PostForm;

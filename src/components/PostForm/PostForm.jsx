import {
	Input,
	Button,
	Typography,
	IconButton,
	Select,
	Tooltip,
	Textarea,
	Option,
} from '@material-tailwind/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CommentBox } from '../RecipeFrom/CommentBox';
import Ingredient from '../RecipeFrom/Ingredients';

const PostForm = ({ post }) => {
	const navigate = useNavigate();
	// const userData = useSelector((state) => state.userData);
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm({
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
				ingredients: post?.ingredients || [],
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
				setValue('slug', slugTransform(value.title), { shouldValidate: true });
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
						name='select'
						control={control}
						defaultValue='active'
						render={({ field }) => (
							<Select
								label='Status'
								value='active'
								{...field}>
								<Option value='active'>Active</Option>
								<Option value='Inactive'>Inactive </Option>
							</Select>
						)}
					/>

					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Basic Details
					</Typography>

					<div className='flex flex-wrap gap-2 w-full'>
						<div>
							<Input
								label='Serving :'
								size='md'
								placeholder='How many people for serving.'
								name='Serving'
								{...register('serving', { required: true })}
							/>
						</div>
						<div>
							<Input
								label='Preparing Time :'
								size='md'
								placeholder='How much time to prepare.'
								name='preparingTime'
								{...register('preparingTime', { required: true })}
							/>
						</div>
						<div>
							<Input
								label='Coke Time :'
								size='md'
								placeholder='How much time to cocking.'
								name='cockingTime'
								{...register('cockingTime', { required: true })}
							/>
						</div>
					</div>
					<div className='flex flex-wrap gap-2 w-full'>
						<div>
							<Input
								label='Resting Time :'
								size='md'
								placeholder='How much time to resting.'
								name='restingTime'
								{...register('restingTime', { required: true })}
							/>
						</div>
						<div>
							<Input
								label='Total time :'
								size='md'
								placeholder='Total time for preparing.'
								name='totalTime'
								{...register('totalTime', { required: true })}
							/>
						</div>
						<div>
							<Input
								label='Baking time :'
								size='md'
								placeholder='Total time for preparing.'
								name='bakingTime'
								{...register('bakingTime', { required: true })}
							/>
						</div>
					</div>

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
								label='Keyword :'
								size='md'
								name='keyword'
								className='w-full'
								{...register('keyword', { required: true })}
							/>
							<Input
								label='Cuisine :'
								size='md'
								name='cuisine'
								className='w-full'
								{...register('cuisine', { required: true })}
							/>
						</div>
						<div className='flex flex-col w-full  gap-2 '>
							<Input
								label='Course :'
								size='md'
								name='course'
								className='w-full'
								{...register('course', { required: true })}
							/>
							<Input
								label='Calories :'
								size='md'
								name='calories'
								className='w-full'
								{...register('calories', { required: true })}
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
						name='steps'
						control={control}
						defaultValue={getValues([])}
					/>
					<div className='w-full'>
						<div className='flex gap-2 justify-end'>
							<Button
								size='sm'
								type='submit'
								className=' bg-green-500'>
								{post ? 'Update' : 'Submit'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default PostForm;

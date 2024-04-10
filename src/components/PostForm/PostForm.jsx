import {
	Input,
	Button,
	Typography,
	IconButton,
} from '@material-tailwind/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select, Option } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import TodoApp from '../RecipeFrom/Ingredients';
import RealTimeEditor from '../RealTimeEditor/RealTimeEditor';
import { CommentBox } from '../RecipeFrom/CommentBox';

const PostForm = ({ post }) => {
	const navigate = useNavigate();
	// const userData = useSelector((state) => state.userData);
	const [status, setStatus] = useState('active');
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm({
			defaultValues: {
				title: post?.title || '',
				slug: post?.slug || '',
				content: post?.content || '',
				status: post?.status || 'active',
				featuredImages: post?.featuredImages || [],
			},
		});
	const submit = async (data) => {
		if (post) {
			const file = data.image[0] ? await post.uploadFile(data.image[0]) : null;

			if (file) {
				await post.deleteFile(file.$id);
			}
			const dbPost = await post.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : undefined,
			});

			if (dbPost) {
				navigate(`/post/${dbPost.$id}`);
			}
		} else {
			const file = data.image[0] ? await post.uploadFile(data.image[0]) : null;

			if (file) {
				const fileId = file.$id;
				data.featuredImage = fileId;
				const dbPost = await post.createPost({
					...data,
					userId: 'userData.$id',
				});
				if (dbPost) {
					navigate(`/post/${dbPost.$id}`);
				}
			}
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
			<div className='flex  gap-5 px-10'>
				<div className='w-full md:w-7/12  mb-4 md:mb-0 flex flex-col gap-5'>
					<Input
						label='Title :'
						placeholder='Title'
						name='title'
						{...register('title', { required: true })}
					/>
					<Input
						label='Slug :'
						placeholder='Slug'
						name='slug'
						{...register('slug', { required: true })}
						onInput={(e) => {
							setValue('slug', slugTransform(e.target.value), {
								shouldValidate: true,
							});
						}}
					/>
					<Select
						label='Status'
						value={status}
						onChange={(val) => setStatus(val)}
						{...register('status', { required: true })}>
						<Option value='active'>Active</Option>
						<Option value='inactive'>Inactive </Option>
					</Select>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Basic Details
					</Typography>

					<div className='flex flex-row  gap-2 w-3/12'>
						<Input
							label='Serving :'
							placeholder='How many people for serving.'
							name='Serving'
							className='w-full'
							{...register('serving', { required: true })}
						/>
						<Input
							label='Preparing Time :'
							placeholder='How much time to prepare.'
							name='preparing-time'
							className='w-full'
							{...register('preparing-time', { required: true })}
						/>
						<Input
							label='Coke Time :'
							placeholder='How much time to cocking.'
							name='cocking-time'
							className='w-full'
							{...register('cocking-time', { required: true })}
						/>
					</div>
					<div className='flex flex-row  gap-2 w-3/12'>
						<Input
							label='Resting Time :'
							placeholder='How much time to resting.'
							name='resting-time'
							className='w-full'
							{...register('resting-time', { required: true })}
						/>
						<Input
							label='Total time :'
							placeholder='Total time for preparing.'
							name='total-time'
							className='w-full'
							{...register('total-time', { required: true })}
						/>
						<Input
							label='Baking time :'
							placeholder='Total time for preparing.'
							name='baking-time'
							className='w-full'
							{...register('baking-time', { required: true })}
						/>
					</div>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Steps:
					</Typography>
					{/*
					<RealTimeEditor
						name='content'
						control={control}
						defaultValue={getValues('content')}
					/>
					 */}
					<CommentBox />
				</div>
				<div className='w-full md:w-5/12 px-2 flex flex-col gap-5'>
					<Typography
						as='h3'
						className='font-semibold'>
						Recipe Ingredients:
					</Typography>
					<div className='flex flex-col gap-2 w-full'>
						<TodoApp />
						<div className='flex justify-between w-full gap-2'>
							<div className='flex flex-col w-full gap-2 '>
								<Input
									label='Keyword :'
									placeholder='How much time to resting.'
									name='keyword'
									className='w-full'
									{...register('keyword', { required: true })}
								/>
								<Input
									label='Cuisine :'
									placeholder='Total time for preparing.'
									name='cuisine'
									className='w-full'
									{...register('cuisine', { required: true })}
								/>
							</div>
							<div className='flex flex-col w-full  gap-2 '>
								<Input
									label='Course :'
									placeholder='Total time for preparing.'
									name='course'
									className='w-full'
									{...register('course', { required: true })}
								/>
								<Input
									label='Calories :'
									placeholder='How much time to resting.'
									name='calories'
									className='w-full'
									{...register('calories', { required: true })}
								/>
							</div>
						</div>
					</div>
					<div className='flex w-full justify-between py-1.5'>
						<div className='relative flex gap-2 w-full'>
							<Input
								label='Featured Image :'
								type='file'
								multiple
								accept='image/png, image/jpg, image/jpeg, image/gif'
								{...register('image', { required: !post })}
							/>
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
					</div>

					<div className='w-full'>
						<div className='flex gap-2 justify-end'>
							<Button
								size='sm'
								color='red'
								variant='text'
								className='rounded-md'>
								Cancel
							</Button>
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

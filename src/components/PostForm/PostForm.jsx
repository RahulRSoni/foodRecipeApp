import { Input, Button } from '@material-tailwind/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Select, Option } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
// import RealTimeEditor from '../RealTimeEditor/RealTimeEditor';
import TodoApp from '../TodoFrom/TodoForm';
// import { useSelector } from 'react-redux';

const PostForm = ({ post }) => {
	const navigate = useNavigate();
	// const userData = useSelector((state) => state.userData);
	const [status, setStatus] = useState('active');
	const { register, handleSubmit, watch, setValue } = useForm({
		defaultValues: {
			title: post?.title || '',
			slug: post?.slug || '',
			content: post?.content || '',
			status: post?.status || 'active',
			featuredImage: post?.featuredImage || '',
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
		<form
			onSubmit={handleSubmit(submit)}
			className='flex  gap-5 px-10'>
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
				<div className='flex gap-2 w-full'>
					<TodoApp />
					<Input
						label='Featured Image :'
						type='file'
						accept='image/png, image/jpg, image/jpeg, image/gif'
						{...register('image', { required: !post })}
					/>
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
			<div className='w-full md:w-5/12 px-2 flex flex-col gap-5'>
				<Select
					label='Status'
					value={status}
					onChange={(val) => setStatus(val)}
					{...register('status', { required: true })}>
					<Option value='active'>Active</Option>
					<Option value='inactive'>Inactive </Option>
				</Select>
				<Button
					type='submit'
					className='w-full bg-green-500'>
					{post ? 'Update' : 'Submit'}
				</Button>
			</div>
		</form>
	);
};

export default PostForm;

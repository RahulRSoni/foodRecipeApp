import React, { useRef } from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Typography,
	Tooltip,
	Textarea,
	IconButton,
	avatar,
} from '@material-tailwind/react';

import { FcUpload, FcHighPriority, FcApproval } from 'react-icons/fc';
import { storeImages } from '../../api/store.services';
import { useForm } from 'react-hook-form';

export function ProfileEditor({ user }) {
	const { displayName, phoneNumber, email, photoURL, about } = user[0];
	const [open, setOpen] = React.useState(false);
	const [image, setImage] = React.useState([]);
	const [imageUploadError, setImageUploadError] = React.useState(false);
	const [file, setFile] = React.useState({});
	const [imageUploadPercentage, setImageUploadPercentage] = React.useState('');

	console.log(imageUploadError, file, imageUploadPercentage);

	const { register, handleSubmit, watch, setValue, control, reset } = useForm({
		defaultValues: {
			photoURL: photoURL || '',
			displayName: displayName || '',
			phoneNumber: phoneNumber || '',
			email: email || '',
			about: about || '',
		},
	});

	const fileInputRef = useRef(null);

	React.useEffect(() => {
		if (image) {
			handleFileUpload(image);
		}
	}, [image]);

	const handleFileUpload = (image) => {
		const promises = [];
		console.log(promises);
		const progressCallback = (progress) => {
			setImageUploadPercentage(progress);
		};

		promises.push(storeImages(image[0], progressCallback));

		Promise.all(promises)
			.then((url) => {
				setFile({ ...file, avatar: url });
				setImageUploadError(false);
			})
			.catch((error) => {
				setImageUploadError('Image upload failed (2 MB max per image)', error);
			});
	};

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Tooltip
				content={
					<Typography
						color='blue-gray'
						className='text-xs'>
						Update Profile
					</Typography>
				}
				className='bg-white shadow-xl shadow-black/10 '
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0, y: 25 },
				}}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					onClick={handleOpen}
					className='w-auto h-5 text-green-500'>
					<path d='m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z' />
					<path d='M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z' />
				</svg>
			</Tooltip>
			<Dialog
				open={open}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}>
				<DialogHeader>Update your self.</DialogHeader>
				<DialogBody>
					<div className='text-gray-700'>
						<div className='grid md:grid-cols-2 text-sm'>
							<div>
								<img
									className='h-48 p-1 border-dotted border-2 border-gray-500 rounded-md w-auto mx-auto relative'
									src={photoURL}
									onClick={() => fileInputRef.current.click()}
									alt=''
								/>
								<IconButton
									variant='text'
									onClick={handleFileUpload}
									className='fixed right-44 top-64 rounded w-16 h-16'
									disabled={image.length === 0}>
									{imageUploadError ? (
										<FcHighPriority className='w-14 h-14' />
									) : imageUploadPercentage > 0 &&
									  imageUploadPercentage < 100 ? (
										<span>{`${imageUploadPercentage} %`}</span>
									) : imageUploadPercentage === 100 ? (
										<FcApproval className=' w-14 h-14' />
									) : (
										<FcUpload className='w-14 h-14' />
									)}
								</IconButton>

								<input
									type='file'
									ref={fileInputRef}
									accept='image/png, image/jpg, image/jpeg, image/gif'
									onChange={(e) => setImage(e.target.files[0])}
									className='hidden'
								/>
							</div>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Full Name'
									name='displayName'
									{...register('displayName', { required: true })}
								/>
							</div>

							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Contact No.'
									name='phoneNumber'
									{...register('phoneNumber', { required: true })}
								/>
							</div>

							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Email'
									name='eamil'
									{...register('email', { required: true })}
									disabled
								/>
							</div>
							<div className='grid grid-cols-1 p-5'>
								<Textarea
									variant='standard'
									label='About Myself'
									name='about'
									{...register('about', { required: true })}
								/>
							</div>
						</div>
					</div>
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={handleOpen}
						className='mr-1'>
						<span>Cancel</span>
					</Button>
					<Button
						variant='gradient'
						color='green'
						onClick={handleOpen}>
						<span>Update</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}

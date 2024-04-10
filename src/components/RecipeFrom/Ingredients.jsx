import React, { useState } from 'react';
import {
	Input,
	IconButton,
	Tooltip,
	Typography,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from '@material-tailwind/react';

function ingredient() {
	const [quantity, setQuantity] = useState(1);
	const [unit, setUnit] = useState('cup');
	const [vol, setVol] = useState('full');
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const [nextIndex, setNextIndex] = useState(0);

	const onChange = ({ target }) => setInput(target.value);

	const addTodo = () => {
		if (input.trim() !== '' && unit && quantity && vol) {
			const newTodo = {
				id: nextIndex,
				quantity: quantity,
				volume: vol === 'full' ? '' : '½',
				unit: unit,
				ingredient: input.trim(),
			};
			setTodos([...todos, newTodo]);
			setInput('');
			setNextIndex(nextIndex + 1);
		} else {
			console.log('Please fill out all fields');
		}
	};

	const handleDelete = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const units = ['cup', 'tbsp', 'grams', 'kg', 'ltr', 'ml'];
	const quantities = [
		'1/2',
		'1/3',
		'2/3',
		...Array.from({ length: 10 }, (_, i) => String(i + 1)),
	];
	const vols = ['full', 'half'];

	return (
		<div className='flex flex-col gap-3 w-full'>
			<div className='relative flex w-full items-center gap-2'>
				<Tooltip
					placement='bottom'
					className='border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10'
					content={
						<div className='w-full'>
							<Typography
								color='blue-gray'
								className='font-medium font-serif'>
								Ingredients (for help)
							</Typography>
							<ol>
								<li>
									<Typography
										variant='lead'
										color='blue-gray'
										className='text-sm opacity-80'>
										<span className='font-semibold'> 1 cup </span>whole raw
										almonds
									</Typography>
								</li>
								<li>
									<Typography
										variant='lead'
										color='blue-gray'
										className='text-sm opacity-80'>
										<span className='font-semibold'> 1½ tbsp </span>fresh
										rosemary
									</Typography>
								</li>
								<li>
									<Typography
										variant='lead'
										color='blue-gray'
										className='text-sm opacity-80'>
										<span className='font-semibold'> 1 grams </span>blood
										oranges
									</Typography>
								</li>
								<li>
									<Typography
										variant='lead'
										color='blue-gray'
										className='text-sm opacity-80'>
										<span className='font-semibold'> 1 ltr </span>almond milk
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
				<div className='flex justify-center items-center h-full w-full'>
					<Menu placement='bottom-start'>
						<MenuHandler>
							<section
								ripple={false}
								variant='text'
								color='blue-gray'
								className='flex h-auto py-1 w-5 justify-center items-center rounded border border-blue-gray-300 bg-blue-gray-500/10 px-8'>
								{quantity}
							</section>
						</MenuHandler>
						<MenuList>
							{quantities.map((quantity) => (
								<MenuItem
									key={quantity}
									value={quantity}
									className='flex items-center gap-2'
									onClick={() => setQuantity(quantity)}>
									{quantity}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<Menu placement='bottom-start'>
						<MenuHandler>
							<section
								ripple={false}
								variant='text'
								color='blue-gray'
								className='flex h-auto py-1 w-5 justify-center items-center rounded border border-blue-gray-300 bg-blue-gray-500/10 px-8'>
								{vol}
							</section>
						</MenuHandler>
						<MenuList className='max-h-[20rem] max-w-[18rem]'>
							{vols.map((vol) => (
								<MenuItem
									key={vol}
									value={vol}
									className='flex items-center gap-2'
									onClick={() => setVol(vol)}>
									{vol}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<Menu placement='bottom-start'>
						<MenuHandler>
							<section
								ripple={false}
								variant='text'
								color='blue-gray'
								className='flex h-auto py-1 w-5 justify-center items-center rounded border border-blue-gray-300 bg-blue-gray-500/10 px-8'>
								{unit}
							</section>
						</MenuHandler>
						<MenuList>
							{units.map((unit) => (
								<MenuItem
									key={unit}
									value={unit}
									className='flex items-center gap-2'
									onClick={() => setUnit(unit)}>
									{unit}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<Input
						type='ingredients'
						label='Ingredients'
						value={input}
						onChange={onChange}
						containerProps={{
							className: 'min-w-1',
						}}
					/>
					<Tooltip
						placement='top'
						className='border border-blue-gray-50 bg-white shadow-xl shadow-black/10'
						content={
							<Typography
								color='blue-gray'
								className='font-medium font-serif'>
								Add Ingredient
							</Typography>
						}>
						<IconButton
							color={input ? 'green' : 'gray'}
							disabled={!input}
							onClick={addTodo}
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
									d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z'
								/>
							</svg>
						</IconButton>
					</Tooltip>
				</div>
			</div>
			<ul className='flex flex-wrap gap-1'>
				{todos.map((todo) => (
					<li
						key={todo.id}
						className='mb-2 flex border-r-2 border-blue-gray-100'>
						{todo.quantity} {todo.volume && todo.volume} {todo.unit}{' '}
						{todo.ingredient}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='red'
							className='w-6 h-6 mr-2'
							onClick={() => handleDelete(todo.id)}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18 18 6M6 6l12 12'
							/>
						</svg>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ingredient;

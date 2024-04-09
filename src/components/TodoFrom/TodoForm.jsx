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

function TodoApp() {
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
	const quantities = [...Array.from({ length: 10 }, (_, i) => String(i + 1))];
	const vols = ['full', 'half'];

	return (
		<>
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
								className='flex h-full w-5 justify-center items-center rounded border border-blue-gray-300 bg-blue-gray-500/10 px-8'>
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
								className='flex h-full w-5 justify-center items-center rounded border border-blue-gray-300 bg-blue-gray-500/10 px-8'>
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
								className='flex h-full w-5 justify-center items-center rounded border border-blue-gray-300 bg-blue-gray-500/10 px-8'>
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
							className: 'min-w-0',
						}}
					/>
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
							className='w-8 h-8'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					</IconButton>
				</div>
			</div>

			<ul className='flex gap-4 flex-grow'>
				{todos.map((todo) => (
					<li
						key={todo.id}
						className='mb-2 flex item-center border-r-2 border-blue-gray-100'>
						{todo.quantity} {todo.volume && todo.volume} {todo.unit}{' '}
						{todo.ingredient}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='red'
							className='w-6 h-6 mr-5'
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
		</>
	);
}

export default TodoApp;

import React from 'react';
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Button,
	Card,
	Typography,
} from '@material-tailwind/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const menuItems = [
	{
		title: 'Appetizer',
		img: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Breakfast',
		img: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Dessert',
		img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},

	{
		title: 'Drinks',
		img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Main Course',
		img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Starters',
		img: 'https://images.unsplash.com/photo-1598515211932-b130a728a769?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Snack',
		img: 'https://plus.unsplash.com/premium_photo-1671559270002-29d0adb72540?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		title: 'Salad',
		img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

export default function Courses() {
	const [openMenu, setOpenMenu] = React.useState(false);

	return (
		<Menu
			open={openMenu}
			handler={setOpenMenu}
			allowHover>
			<MenuHandler>
				<Button
					variant='text'
					className='flex items-center gap-3 text-md capitalize tracking-normal p-1 font-semibold text-blue-gray-400'>
					Courses
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3.5 w-3.5 transition-transform ${
							openMenu ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className='hidden w-[65rem] grid-cols-12 gap-3 overflow-visible lg:grid bg-transparent backdrop-blur-lg rounded-lg border-0 hover:border-0'>
				<Card
					color='gray'
					shadow={false}
					className='col-span-3 flex h-full items-center justify-center rounded-2xl p-4 hover:scale-105 transition-all duration-700 '>
					<CursorArrowRaysIcon
						strokeWidth={1}
						className='h-10 w-10'
					/>
					<Typography
						className='mt-5 text-center'
						variant='h5'>
						Courses
					</Typography>
				</Card>
				<ul className='col-span-4 flex flex-wrap w-[50rem] gap-1  '>
					{menuItems.map(({ title, img }) => (
						<Link
							href='#'
							key={title}
							className='hover:scale-105 transition-all duration-700 hover:text-blue-gray-400 text-blue-gray-50'>
							<MenuItem>
								<Typography
									variant='h6'
									className='mb-1'>
									{title}
								</Typography>
								<div>
									<img
										src={img}
										className='h-40 w-40 object-cover rounded-xl '
									/>
								</div>
							</MenuItem>
						</Link>
					))}
				</ul>
			</MenuList>
		</Menu>
	);
}

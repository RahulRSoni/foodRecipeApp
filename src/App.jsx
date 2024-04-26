import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import React, { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner.jsx';
function App() {
	const { loading } = useSelector((state) => state.user);
	const [showContent, setShowContent] = useState(false); // State to control content visibility
	console.log(loading);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowContent(true); // After 2 seconds, set showContent to true to render the content
		}, 3000);

		return () => clearTimeout(timeout);
	}, [Spinner]);
	return (
		<>
			{showContent ? (
				<>
					{loading ? (
						<Spinner />
					) : (
						<div>
							<Header />
							<Outlet />
							<Footer />
						</div>
					)}
				</>
			) : (
				<div className='size-6/12 flex items-center justify-center h-full'>
					<Spinner />
				</div>
			)}
		</>
	);
}

export default App;

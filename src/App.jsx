import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import React, { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner.jsx';
function App() {
	const { loading } = useSelector((state) => state.user);
	const [showContent, setShowContent] = useState(false); // State to control content visibility

	useEffect(() => {
		setShowContent(true); // After 5 seconds, set showContent to true to render the content

		return;	
	}, [Spinner]);
	return (
		<>
			{showContent ? (
				<>
					{loading ? (
						<div className='h-full flex items-center justify-center '>
							<Spinner />
						</div>
					) : (
						<div>
							<Header />
							<Outlet />
							<Footer />
						</div>
					)}
				</>
			) : (
				<div className='h- full flex items-center justify-center h-full'>
					<Spinner />
				</div>
			)}
		</>
	);
}

export default App;

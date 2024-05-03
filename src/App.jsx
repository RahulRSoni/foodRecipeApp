import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import React, { useEffect, useState, memo } from 'react';
import Spinner from './components/Spinner/Spinner.jsx';

const LazyContent = React.lazy(() => import('./LazyContent'));

function App() {
	const { loading } = useSelector((state) => state.user);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const handleLoad = () => {
			setShowContent(true);
		};

		if (document.readyState === 'complete') {
			handleLoad();
		} else {
			window.addEventListener('load', handleLoad);
			return () => window.removeEventListener('load', handleLoad);
		}
	}, []);

	return (
		<>
			{showContent ? (
				<>
					{loading ? (
						<div className='h-full flex items-center justify-center '>
							<Spinner />
						</div>
					) : (
						<React.Suspense fallback={<Spinner />}>
							<div>
								<Header />
								<LazyContent />
								<Footer />
							</div>
						</React.Suspense>
					)}
				</>
			) : (
				<div className='h-full flex items-center justify-center '>
					<Spinner />
				</div>
			)}
		</>
	);
}

export default memo(App);

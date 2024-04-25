import {
	About,
	Contact,
	Error,
	Faq,
	RecipeIndex,
	Home,
	AuthPage,
	Profile,
	RecipePage,
	AddPost,
} from './pages/Page.jsx';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import PrivateRoute from './components/Dialog/PrivateRoute.jsx';

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthPage />,
		errorElement: <Error />,
	},
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				errorElement: <Error />,
				index: true,
			},
			{
				path: '/recipe:bake',
				element: <PrivateRoute />,
				errorElement: <Error />,
				children: [
					{
						path: '/recipe:bake',
						element: <RecipePage />,
					},
				],
			},
			{
				path: '/addPost',
				element: <PrivateRoute />,
				errorElement: <Error />,
				children: [
					{
						path: '/addPost',
						element: <AddPost />,
					},
				],
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <Error />,
			},
			{
				path: '/contact',
				element: <Contact />,
				errorElement: <Error />,
			},
			{
				path: '/faq',
				element: <Faq />,
				errorElement: <Error />,
			},
			{
				path: '/recipe',
				element: <RecipeIndex />,
				errorElement: <Error />,
			},
			{
				path: '/profile',
				element: <PrivateRoute />,
				errorElement: <Error />,
				children: [
					{
						path: '/profile',
						element: <Profile />,
					},
				],
			},
		],
	},
]);

export default router;

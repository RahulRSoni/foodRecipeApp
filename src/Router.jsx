import {
	About,
	Contact,
	Error,
	Faq,
	RecipeIndex,
	EditPost,
	Home,
	AuthPage,
	Profile,
	RecipePage,
	PasswordReset,
	AddPost,
} from './pages/Page.jsx';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthPage />,
		errorElement: <Error />,
	},
	{
		path: '/passwordReset',
		element: <PasswordReset />,
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
				path: '/recipe/:course?/:recipeId?',
				element: <PrivateRoute />,
				errorElement: <Error />,
				children: [
					{
						path: '',
						element: <RecipePage />,
					},
				],
			},
			{
				path: '/recipe/addPost',
				element: <PrivateRoute />,
				errorElement: <Error />,
				children: [
					{
						path: '/recipe/addPost',
						element: <AddPost />,
					},
				],
			},

			{
				path: '/recipe/editPost/:recipeId',
				element: <PrivateRoute />,
				errorElement: <Error />,
				children: [
					{
						path: '/recipe/editPost/:recipeId',
						element: <EditPost />,
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
				path: '/recipes-index/:courses?',
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

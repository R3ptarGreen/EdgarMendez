import { HomePage, BiographyPage, ProjectsPage } from '../pages/index';
import { createHashRouter, RouterProvider, useLocation } from 'react-router-dom';
import App from '../App';
import { useEffect } from 'react';

const ScrollTop = () => {
	
	const {pathname} = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0);
	},[pathname])
}
const AppRouter = () => {
	const router = createHashRouter([
		{
			path: '/',
			element: (
				<>
					<App/>
					<ScrollTop/>
				</>
			),
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/biography', element: <BiographyPage /> },
				{ path: '/projects', element: <ProjectsPage /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import KakaoLogin from './KakaoLogin';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/kakaologin" element={<KakaoLogin />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;

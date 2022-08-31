import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import KakaoLogin from "./KakaoLogin";
import MyPage from "../components/MyPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />

        {/* 마이페이지 임시용 */}
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

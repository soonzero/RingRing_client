import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import KakaoLogin from "./KakaoLogin";
import MyPage from "../components/MyPage";
import Alram from "../components/Alram";
import News from "../components/News";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />

        {/* 마이페이지 test용 */}
        <Route path="/mypage" element={<MyPage />}>
          <Route path="/mypage/alram" element={<Alram />} />
          <Route path="/mypage/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

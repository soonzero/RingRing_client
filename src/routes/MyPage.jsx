import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/common/Header";
import { menus } from "../assets/menulist/menus";
import Alram from "../components/Alram";
import News from "../components/News";

const MainStyle = styled.main`
  border: 1px solid black;
  margin: 0 auto;
  max-width: 718px;

  @media screen and (max-width: 768px) {
    padding: 128px 24px;
  }
`;

const MyPage = () => {
  const [menuId, setMenuId] = useState(0);
  return (
    <>
      <Header menuId={menuId} setMenuId={setMenuId} />
      <MainStyle>
        <Routes>
          <Route path="/alram" element={<Alram />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </MainStyle>
    </>
  );
};

export default MyPage;

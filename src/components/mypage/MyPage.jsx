import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";

const MainStyle = styled.main`
  border: 1px solid black;
  margin: 0 auto;
  max-width: 718px;

  @media screen and (max-width: 768px) {
    padding: 128px 24px;
  }
`;

const MyPage = () => {
  return (
    <>
      <Header />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </>
  );
};

export default MyPage;

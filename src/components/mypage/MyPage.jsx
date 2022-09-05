import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";

const MainStyle = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 718px;

  @media screen and (max-width: 768px) {
    padding: 128px 24px;
    top: -128px;
  }
`;

const Background = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fafafa;
`;

const MyPage = () => {
  return (
    <>
      <Header />
      <Background>
        <MainStyle>
          <Outlet />
        </MainStyle>
      </Background>
    </>
  );
};

export default MyPage;

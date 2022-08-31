import styled from "styled-components";
import Header from "./Header";

const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 24px;
  margin: 24px 0px;

  &:first-child,
  &:last-child {
    margin: 0;
  }

  &:nth-child(odd) {
    background-color: #fafafa;
  }

  strong {
    font-family: tossface;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 12px;
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 24px;

    span {
      color: #eddf66;
      font-weight: 700;
    }
  }

  .center {
    text-align: center;
  }
`;

const MyPage = () => {
  return (
    <>
      <Header />
      <SectionStyle></SectionStyle>
    </>
  );
};

export default MyPage;

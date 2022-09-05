import styled from "styled-components";
import ColorBtn from "../../button/ColorBtn";
import Title from "../../common/Title";

const Content = styled.section`
  .gray {
    color: rgba(73, 78, 92);
    font-weight: 500;
  }
  .item {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
  }
  .item-desc {
    padding: 8px 0;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 18px;
    border-radius: 8px;
    font-size: 18px;
  }
  .item-input {
    border: 1px solid rgba(231, 231, 234);
    border-radius: 8px;
    height: 48px;
    display: flex;
    justify-content: center;
  }
`;
const Float = styled.div`
  height: 48px;
`;
export default function Alram() {
  return (
    <>
      <Title text="알람 설정하기" />
      <Content>
        <span className="gray">알람을 받고싶은 지역과 시간을 설정하세요.</span>
        <Float />
        <form action="">
          <div className="item">
            <label className="item-desc gray">지역 설정</label>
            <div className="item-input">
              <input type="text" />
            </div>
          </div>
          <div className="item">
            <label className="item-desc gray">시간 설정</label>
            <div className="item-input">
              <input type="text" />
            </div>
          </div>
          <ColorBtn text="저장" color="rgba(84,113,241)" fontColor="white" />
        </form>
      </Content>
    </>
  );
}

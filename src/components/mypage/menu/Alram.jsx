import styled from "styled-components";

export default function Alram() {
  const Title = styled.h3`
    border-bottom: 1px solid rgba(226, 228, 232);
    padding-bottom: 24px;
    margin: 48px 0;
    font-weight: bold;
    font-size: 32px;
    color: rgba(48, 53, 65);
  `;
  const Content = styled.section`
    .float {
      flex: 0 0 auto;
      height: 48px;
    }
    .gray {
      color: rgba(73, 78, 92);
      font-weight: 500;
    }
    .input {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 48px;
      margin: 1px auto 0;
      font-size: 15px;
      line-height: 20px;
      color: #333d4b;
      background-color: #fff;
      border: 1px solid #333d4b;
      outline: none;
      box-shadow: inset 0 0 0 1px rgb(0 27 55 / 10%);
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      overflow: hidden;
      transition: background 0.2s ease, color 0.1s ease, box-shadow 0.2s ease;
    }
    .input__field {
      width: 100%;
      height: 100%;
      min-width: 0;
    }
    .radius--m {
      border-radius: 8px;
    }

    .input-desc {
      margin: 24px 0;
    }
  `;
  return (
    <>
      <Title className="gray">알람 설정하기</Title>
      <Content>
        <span className="gray">알람을 받고싶은 지역과 시간을 설정하세요.</span>
        <div className="float" />
        <form action="">
          <div>
            <label className="input-desc gray">지역 설정</label>
            <div className="input radius--m input--error">
              <input className="input__field" type="text" />
            </div>
          </div>
          <div className="float" />
          <button>저장</button>
        </form>
      </Content>
    </>
  );
}

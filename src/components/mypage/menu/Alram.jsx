import { useState } from 'react';
import styled from 'styled-components';
import ColorBtn from '../../button/ColorBtn';
import Title from '../../common/Title';
import DaumPostcodeEmbed from 'react-daum-postcode';
import ReactModal from 'react-modal';
import Map from '../../common/Map';

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
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { zIndex: 1000 },
};
ReactModal.setAppElement('#root');

const Postcode = (closeModal) => {
  const handleComplete = (data) => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};
export default function Alram() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              <input type="text" readOnly onClick={openModal} />
            </div>
            <Float />
            <Map />
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
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <Postcode closeModal={closeModal} />
      </ReactModal>
    </>
  );
}

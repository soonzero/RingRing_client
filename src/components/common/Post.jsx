import DaumPostcodeEmbed from 'react-daum-postcode';
import ReactModal from 'react-modal';

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

const Postcode = ({ closePost, setAddress }) => {
  const handleComplete = (data) => {
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

    setAddress(fullAddress);
    closePost();
  };
  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};

export default function Post({ postOpen, closePost, setAddress }) {
  return (
    <ReactModal isOpen={postOpen} onRequestClose={closePost} style={customStyles}>
      <Postcode closePost={closePost} setAddress={setAddress} />
    </ReactModal>
  );
}

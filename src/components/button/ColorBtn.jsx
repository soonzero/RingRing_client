import styled from 'styled-components';

const Btn = styled.button`
  width: 62px;
  height: 46px;
  margin: 1px;
  padding: 14px 18px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.fontColor};
`;

export default function ColorBtn(props) {
  return (
    <Btn color={props.color} fontColor={props.fontColor}>
      {props.text}
    </Btn>
  );
}

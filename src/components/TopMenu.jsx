import { useState } from "react";
import styled from "styled-components";

const Menu = styled.li`
  margin-left: auto;

  span {
    color: gray;
    font-weight: 600;
    margin-left: 10px;
  }
`;

const TopMenu = () => {
  //로그인체크 true: 로그인 상태
  const [chkLogin, setChkLogin] = useState(true);
  //메뉴
  const menus = ["뉴스", "알람"];
  return (
    <Menu>
      {chkLogin
        ? menus.map((menu, idx) => {
            return <span key={idx}>{menu}</span>;
          })
        : null}
    </Menu>
  );
};
export default TopMenu;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menus } from '../assets/menulist/menus';

const MenuStyle = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;

  .menu-content {
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  span {
    padding: 12px 10px;
    font-size: 15px;
    line-height: 20px;
    color: #4e5968;
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    background-color: transparent;
    text-decoration: none;
    text-align: left;
    font-weight: 700;
  }
  .now {
    background-color: #4e5968;
    color: white;
  }
  span:hover {
    opacity: 0.5;
  }
  a {
    text-decoration: none;
  }
`;

const TopMenu = () => {
  //로그인체크 true: 로그인 상태
  const [chkLogin, setChkLogin] = useState(true);
  //클릭된 메뉴 상태
  const [menuId, setMenuId] = useState(0);

  /**
   * 메뉴 버튼 클릭시 백그라운드 색상 변경
   * @param {number} id
   */
  const handleMenuClick = (id) => {
    setMenuId(id);
  };
  return (
    <MenuStyle>
      {chkLogin &&
        menus.map((menu) => {
          return (
            <li className="menu-content" key={menu.id}>
              <Link to={menu.path}>
                <span className={menuId === menu.id ? 'now' : null} onClick={() => handleMenuClick(menu.id)}>
                  {menu.text}
                </span>
              </Link>
            </li>
          );
        })}
    </MenuStyle>
  );
};
export default TopMenu;

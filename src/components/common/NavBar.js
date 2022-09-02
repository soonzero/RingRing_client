import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/icons/logo.svg";
import { useEffect, useState } from "react";
import TopMenu from "../TopMenu";

const NavBarStyle = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 60px;
  background-color: white;
  border-bottom: ${(props) => `1px solid ${props.border ? "rgba(0, 27, 55, 0.1)" : "transparent"}}`};
  display: flex;
  margin: 0 5%;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 24px;
  }

  .navbar-content {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .navbar-logo-container {
    display: inline-block;

    width: 30px;
    height: 30px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const NavBar = ({ menuId, setMenuId }) => {
  const [border, setBorder] = useState(false);

  const onScrollHandler = () => {
    if (window.scrollY > 0) setBorder((prev) => true);
    else setBorder((prev) => false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <NavBarStyle border={border}>
      <ul className="navbar-container">
        <li className="navbar-content">
          <span className="navbar-logo-container">
            <LogoSVG />
          </span>
        </li>
      </ul>
      <TopMenu menuId={menuId} setMenuId={setMenuId} />
    </NavBarStyle>
  );
};

export default NavBar;

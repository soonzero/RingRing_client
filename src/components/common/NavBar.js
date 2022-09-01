import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/icons/logo.svg';

const NavBarStyle = styled.nav`
	max-width: 1920px;
	margin: 0 auto;
	width: 100%;
	height: 60px;

	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		padding: 0 24px;
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

const NavBar = () => {
	return (
		<NavBarStyle>
			<ul className="navbar-container">
				<li className="navbar-content">
					<span className="navbar-logo-container">
						<LogoSVG />
					</span>
				</li>
			</ul>
		</NavBarStyle>
	);
};

export default NavBar;

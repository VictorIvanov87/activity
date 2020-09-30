import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	box-sizing: border-box;
	z-index: 1;
	background: rgb(205, 205, 205);
	background: linear-gradient(
		180deg,
		rgba(205, 205, 205, 0.7) 0%,
		rgba(255, 255, 255, 0) 100%
	);
`;

const Logo = styled.img`
	width: 42px;
	height: 42px;
`;

const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavigationLink = styled.div`
	color: #3a3a3a;
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
	margin: 0 20px;
	cursor: pointer;
	transition: all 0.25s ease;
	&:hover {
		color: #0d0d0d;
	}
`;

export { HeaderContainer, Logo, Navigation, NavigationLink };

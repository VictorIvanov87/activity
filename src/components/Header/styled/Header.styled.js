import styled from 'styled-components';

const HeaderContainer = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	box-sizing: border-box;
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
	color: white;
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin: 0 20px;
	cursor: pointer;
	transition: all 0.25s ease;
	&:hover {
		color: #ddd;
	}
`;

export { HeaderContainer, Logo, Navigation, NavigationLink };

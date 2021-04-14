import styled from 'styled-components';
import backgroundImg from '../../../images/login-page.jpg';

export const LoginPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-image: url(${backgroundImg});
	background-size: cover;
`;
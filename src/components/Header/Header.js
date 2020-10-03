import React, { useState } from 'react';
import LogoSrc from '../../images/logo.png';
import { EuiFieldText } from '@elastic/eui';
import {
	HeaderContainer,
	Logo,
	Navigation,
	NavigationLink,
} from './styled/Header.styled';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	const [search, setSearch] = useState('');

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<HeaderContainer>
			<Logo src={LogoSrc} alt="logo" />
			<EuiFieldText
				placeholder="Search..."
				value={search}
				onChange={(e) => onChange(e)}
				aria-label="Search"
			/>
			<Navigation>
				<NavigationLink as={NavLink} to="/map">
					Map
				</NavigationLink>
				<NavigationLink as={NavLink} to="/feed">
					Feed
				</NavigationLink>
			</Navigation>
		</HeaderContainer>
	);
};

export { Header };

import React, { useState } from 'react';
import LogoSrc from '../../logo.png';
import { EuiFieldText } from '@elastic/eui';
import {
	HeaderContainer,
	Logo,
	Navigation,
	NavigationLink,
} from './styled/Header.styled';

const Header = (props) => {
	const [search, setSearch] = useState('');

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<HeaderContainer>
			<Logo src={LogoSrc} />
			<EuiFieldText
				placeholder="Search..."
				value={search}
				onChange={(e) => onChange(e)}
				aria-label="Search"
			/>
			<Navigation>
				<NavigationLink>Map</NavigationLink>
				<NavigationLink>Feed</NavigationLink>
			</Navigation>
		</HeaderContainer>
	);
};

export { Header };

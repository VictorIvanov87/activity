import React from 'react';
import { ProfileContainer } from './styled/Profile.styled';
import { EuiCard, EuiFlexGroup, EuiFlexGrid } from '@elastic/eui';

const Profile = () => {
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	return (
		<ProfileContainer>
			<EuiFlexGroup gutterSize="m">
				<EuiFlexGrid columns={3}>
					<EuiCard
						image={currentUser.imageUrl}
						title={currentUser.name}
						description={currentUser.googleId}
					/>
				</EuiFlexGrid>
			</EuiFlexGroup>
		</ProfileContainer>
	);
};

export { Profile };

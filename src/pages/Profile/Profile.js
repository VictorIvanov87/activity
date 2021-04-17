import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileContainer } from './styled/Profile.styled';
import { EuiCard, EuiFlexGroup, EuiFlexGrid } from '@elastic/eui';

const Profile = () => {
	const currentUser = useSelector((state) => state.currentUser);

	return (
		<ProfileContainer>
			<EuiFlexGroup gutterSize="m">
				<EuiFlexGrid columns={3}>
					<EuiCard
						image={currentUser.data.imageUrl}
						title={currentUser.data.name}
						description={currentUser.data.googleId}
					/>
				</EuiFlexGrid>
			</EuiFlexGroup>
		</ProfileContainer>
	);
};

export { Profile };

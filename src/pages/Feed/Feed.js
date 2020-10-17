import React from 'react';
import { useEffect } from 'react';
import { FeedContainer } from './styled/Feed.styled';
import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiIcon } from '@elastic/eui';
import { getAllActivities } from '../../store/slices/activities';
import { useDispatch, useSelector } from 'react-redux';

const Feed = (props) => {
	const dispatch = useDispatch();
	const activities = useSelector((state) => state.activities.data);

	useEffect(() => {
		dispatch(getAllActivities());
	}, [dispatch]);

	return (
		<FeedContainer>
			<EuiFlexGroup gutterSize="l">
				{activities.map((activity) => {
					return (
						<EuiFlexItem key={activity.id}>
							<EuiCard
								textAlign="left"
								href="https://elastic.github.io/eui/"
								image="https://source.unsplash.com/400x200/?City"
								icon={<EuiIcon size="xxl" type="logoBeats" />}
								title={activity.title}
								description={activity.description}
							/>
						</EuiFlexItem>
					);
				})}
			</EuiFlexGroup>
		</FeedContainer>
	);
};

export { Feed };

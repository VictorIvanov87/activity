import * as React from 'react';
import { Marker } from 'react-map-gl';
import { MarkerIcon } from '../MarkerIcon/MarkerIcon';

const Activities = React.memo(({ data }) => {
	return data.map((activity) => {
		return (
			<Marker
				latitude={activity.coordinates.latitude}
				longitude={activity.coordinates.longitude}
				offsetLeft={-20}
				offsetTop={-10}
				key={activity.id}
			>
				<MarkerIcon />
			</Marker>
		);
	});
});

export { Activities };

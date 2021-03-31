import * as React from 'react';
import { Marker } from 'react-map-gl';
import { MarkerIcon } from '../MarkerIcon/MarkerIcon';

const Activities = React.memo(({ data }) => {
	console.log(data)
	return data.map((activity) => {
		return (
			<Marker
				latitude={Number(activity.lat)}
				longitude={Number(activity.lng)}
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

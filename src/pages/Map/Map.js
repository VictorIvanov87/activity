import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = (props) => {
	const [error, setError] = useState(null);
	const [viewport, setViewport] = useState({});

	useEffect(() => {
		if (!navigator || !navigator.geolocation) {
			setError('Geolocation is not supported');
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(res) =>
				setViewport({
					width: '100%',
					height: '100vh',
					latitude: res.coords.latitude,
					longitude: res.coords.longitude,
					zoom: 13,
				}),
			(err) => setError(err),
			{ maximumAge: 10000, timeout: 5000, enableHighAccuracy: true }
		);
	}, []);

	if (error) {
		return <div>{error.message}</div>;
	} else {
		return (
			<ReactMapGL
				{...viewport}
				mapStyle="mapbox://styles/mapbox/light-v10"
				mapboxApiAccessToken="pk.eyJ1IjoidmlrdG9yaXZhbm92ODciLCJhIjoiY2s0bHU1Y2owMDVucDNubWhxeXFuZzBqZiJ9.3TREaRyO8IbX8f2ERSFAqg"
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			/>
		);
	}
};

export { Map };

import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { MarkerIcon } from '../../components/MarkerIcon';
import { getAllActivities } from '../../store/slices/activities';

const Map = (props) => {
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const [position, setPosition] = useState({});
	const activities = useSelector((state) => state.activities.data);

	useEffect(() => {
		dispatch(getAllActivities());
	}, [dispatch]);

	useEffect(() => {
		if (!navigator || !navigator.geolocation) {
			setError('Geolocation is not supported');
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(res) =>
				setPosition({
					width: '100%',
					height: '100vh',
					latitude: res.coords.latitude,
					longitude: res.coords.longitude,
					zoom: 13,
					center: [res.coords.latitude, res.coords.longitude],
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
				{...position}
				mapStyle="mapbox://styles/mapbox/light-v10"
				mapboxApiAccessToken="pk.eyJ1IjoidmlrdG9yaXZhbm92ODciLCJhIjoiY2s0bHU1Y2owMDVucDNubWhxeXFuZzBqZiJ9.3TREaRyO8IbX8f2ERSFAqg"
				onViewportChange={(nextPosition) => setPosition(nextPosition)}
			>
				<Marker
					latitude={position.latitude}
					longitude={position.longitude}
					offsetLeft={-20}
					offsetTop={-10}
				>
					<MarkerIcon />
				</Marker>
			</ReactMapGL>
		);
	}
};

export { Map };

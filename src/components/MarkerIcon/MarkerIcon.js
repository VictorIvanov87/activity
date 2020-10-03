import * as React from 'react';
import { Icon } from './styled/MarkerIcon.styled';
import MarkerIconSrc from '../../images/marker.png';

const MarkerIcon = () => {
	return <Icon src={MarkerIconSrc} alt="Marker Icon" />;
};

export { MarkerIcon };

import 'leaflet/dist/leaflet.css';
import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import euclidianDist from '../../utilities/euclidianDist';
import usePosition from '../../hooks/usePosition';

const MyLocationFetcher = ({ children }) => {
	const position = usePosition();
	const MIN_DISTANCE_FOR_LOCATION_UPDATE = 0.1;
	const [locations, setLocations] = React.useState([]);

	React.useEffect(() => {
		if (position.lat) {
			if (
				locations.length === 0 ||
				euclidianDist(
					[locations[locations.length - 1].lat, locations[locations.length - 1].lng],
					[position.lat, position.lng]
				) > MIN_DISTANCE_FOR_LOCATION_UPDATE
			) {
				setLocations(locations => [...locations, { lat: position.lat, lng: position.lng }]);
			}
		}
	}, [position, locations]);

	return React.Children.map(children, child => React.cloneElement(child, { locations: locations }));
};

export default MyLocationFetcher;

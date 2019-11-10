import 'leaflet/dist/leaflet.css';
import React from 'react';
import usePosition from '../../hooks/usePosition';
import euclidianDist from '../../utilities/euclidianDist';

const MyLocationFetcher = ({ children }) => {
	const position = usePosition();
	const MIN_DISTANCE_FOR_LOCATION_UPDATE = 0.000001;
	const [locations, setLocations] = React.useState([]);

	React.useEffect(() => {
		if (position.lat) {
			if (locations.length > 0) {
				console.log(
					euclidianDist(
						[locations[locations.length - 1].lat, locations[locations.length - 1].lng],
						[position.lat, position.lng]
					),
					locations.length
				);
			}
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

import 'leaflet/dist/leaflet.css';
import React from 'react';
import usePosition from '../../hooks/usePosition';
import haversineDist from '../../utilities/haversineDist';
import pushLocation from './pushLocation';
import { useStateValue } from '../../utilities/StateManagement/stateManagement';

const MyLocationFetcher = ({ children }) => {
	const [{ user }, dispatch] = useStateValue();
	const position = usePosition();
	const MIN_DISTANCE_FOR_LOCATION_UPDATE = 1;
	const [locations, setLocations] = React.useState([]);

	console.log(user);
	React.useEffect(() => {
		if (position.lat) {
			if (
				locations.length === 0 ||
				haversineDist(
					[locations[locations.length - 1].lat, locations[locations.length - 1].lng],
					[position.lat, position.lng]
				) > MIN_DISTANCE_FOR_LOCATION_UPDATE
			) {
				if (user.currentUser) {
					pushLocation(user.currentUser.uid, position);
				}
				setLocations(locations => [...locations, { lat: position.lat, lng: position.lng }]);
			}
		}
	}, [position, locations]);

	return React.Children.map(children, child => React.cloneElement(child, { locations: locations }));
};

export default MyLocationFetcher;

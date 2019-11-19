import 'leaflet/dist/leaflet.css';
import React from 'react';
import useOperation from '../../hooks/useOperation';
import usePosition from '../../hooks/usePosition';
import haversineDist from '../../utilities/haversineDist';
import { GlobalState } from '../../utilities/StateManagement/stateManagement';
import pushLocation from './pushLocation';
const MyLocationFetcher = ({ children }) => {
	const [{ user }, dispatch] = React.useContext(GlobalState);
	const position = usePosition();
	const MIN_DISTANCE_FOR_LOCATION_UPDATE = 0.1;
	const [myLocations, setMyLocations] = React.useState([]);

	const { error, loading, locations } = useOperation('dummy param');
	console.log({ error, loading, locations });

<<<<<<< HEAD
	React.useEffect(() => {
		if (position.lat) {
			if (
				myLocations.length === 0 ||
				haversineDist(
					[myLocations[myLocations.length - 1].lat, myLocations[myLocations.length - 1].lng],
					[position.lat, position.lng]
				) > MIN_DISTANCE_FOR_LOCATION_UPDATE
			) {
				if (user.uid) {
					pushLocation(user.uid, position);
				}
				setMyLocations(myLocations => [...myLocations, { lat: position.lat, lng: position.lng }]);
			}
		}
	}, [position, myLocations, user.uid]);

	return React.Children.map(children, child =>
		React.cloneElement(child, {
			myLocations: myLocations,
			// locations: locations,
			points: locations.map(p => [p.lat, p.lng]),
		})
	);
=======
  React.useEffect(() => {
    if (position.lat) {
      if (
        myLocations.length === 0 ||
        haversineDist(
          [
            myLocations[myLocations.length - 1].lat,
            myLocations[myLocations.length - 1].lng,
          ],
          [position.lat, position.lng],
        ) > MIN_DISTANCE_FOR_LOCATION_UPDATE
      ) {
        if (user.uid) {
          pushLocation(user.uid, position);
        }
        setMyLocations(myLocations => [
          ...myLocations,
          { lat: position.lat, lng: position.lng },
        ]);
      }
    }
  }, [position, myLocations, user.uid]);

  return React.Children.map(children, child =>
    React.cloneElement(child, {
      myLocations: myLocations,
      locations: locations,
    }),
  );
>>>>>>> 80a13d035fe10ae21d55f86849a297e7cb0762e4
};

export default MyLocationFetcher;

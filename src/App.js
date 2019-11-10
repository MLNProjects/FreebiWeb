import React from 'react';
import Header from './Components/Header/header';
import usePosition from './hooks/usePosition';
import MapView from './MapView';
import euclidianDist from './utilities/euclidianDist';

//Imports to handle global states
import { StateProvider } from './utilities/StateManagement/stateManagement';
import reducer from './utilities/StateManagement/reducer';
import initialState from './utilities/StateManagement/initialState';

const MIN_DISTANCE_FOR_LOCATION_UPDATE = 0.1;

function App() {
	const position = usePosition();

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

	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<StateProvider initialState={initialState} reducer={reducer}>
				<Header />
				<MapView locations={locations}></MapView>
			</StateProvider>
		</div>
	);
}

export default App;

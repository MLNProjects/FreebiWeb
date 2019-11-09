import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapView from './MapView';

function App() {
	const [isOn, setIsOn] = React.useState(false);
	const [positions, setPositions] = React.useState([]);

	navigator.geolocation.getCurrentPosition(p => setPositions([...positions, p]));

	const updateLocations = () => {
		if ('geolocation' in navigator) {
			console.log(positions);
			navigator.geolocation.getCurrentPosition(p => setPositions([...positions, p]));
		} else {
			/* geolocation IS NOT available */
		}
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			updateLocations();
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return isOn ? (
		<div style={{ height: '100vh', width: '100vw' }}>
			<MapView locations={positions}></MapView>
		</div>
	) : (
		<button onClick={() => setIsOn(true)}>turn on</button>
	);
}

export default App;

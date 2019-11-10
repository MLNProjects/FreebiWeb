import React from 'react';
import MyLocationFetcher from './MyLocationFetcher';
import MapView from './MapView';
const Map = ({}) => {
	return (
		<MyLocationFetcher>
			<MapView />
		</MyLocationFetcher>
	);
};
export default Map;

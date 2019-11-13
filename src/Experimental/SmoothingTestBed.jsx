import React from 'react';
import MapView from '../Routes/Map/MapView';
import { malmoPath } from './testPath';
import { naiveAveraging } from './naiveAveraging';
const SmoothingTestBed = ({}) => {
	const smoothPath = naiveAveraging(malmoPath);

	return <MapView myLocations={malmoPath} path={smoothPath.map(p => [p.lat, p.lng])}></MapView>;
};

export default SmoothingTestBed;

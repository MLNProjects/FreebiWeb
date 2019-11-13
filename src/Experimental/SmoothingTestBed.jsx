import React from 'react';
import MapView from '../Routes/Map/MapView';
import { malmoPath } from './testPath';
import { naiveAveraging } from './naiveAveraging';
const SmoothingTestBed = ({}) => {
	const smoothPath = naiveAveraging(malmoPath);

	console.log({ smoothPath });

	return <MapView locations={malmoPath} myLocations={smoothPath}></MapView>;
};

export default SmoothingTestBed;

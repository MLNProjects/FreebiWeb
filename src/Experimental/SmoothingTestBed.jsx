import React from 'react';
import MapView from '../Routes/Map/MapView';
import { malmoPath } from './testPath';
import { naiveAveraging } from './naiveAveraging';
import { withSpeed, pruneFastPoints } from './speed';
const SmoothingTestBed = ({}) => {
	let malmoPathWithSpeed = withSpeed(malmoPath);
	let smoothPath = pruneFastPoints(malmoPath, 10);

	return <MapView myLocations={malmoPathWithSpeed} path={smoothPath.map(p => [p.lat, p.lng])}></MapView>;
};

export default SmoothingTestBed;

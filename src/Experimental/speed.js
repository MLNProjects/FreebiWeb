// Hussein bolt sprint speed 37.58 km/h.
//
import haversineDist from '../utilities/haversineDist';
import { timestampToMillis } from '../utilities/timestampToMillis';

export const withSpeed = path => {
	for (var i = 0; i < path.length - 1; i++) {
		let a = path[i];
		let b = path[i + 1];
		let deltaM = haversineDist([a.lat, a.lng], [b.lat, b.lng]);
		let deltaS = timestampToMillis(b.timestamp) - timestampToMillis(a.timestamp);
		let speedKMH = (3600.0 * deltaM) / 1000.0 / (deltaS / 1000.0);
		console.log({ deltaM, deltaS, speedKMH });
		path[i]['speed'] = speedKMH.toFixed(1);
	}

	return path;
};

export const pruneFastPoints = (path, speedLimitKMH) => {
	const pathWithSpeed = withSpeed(path);
	const withoutSpeedLimitViolations = pathWithSpeed.filter(p => p.speed && p.speed < speedLimitKMH);
	return withoutSpeedLimitViolations;
};

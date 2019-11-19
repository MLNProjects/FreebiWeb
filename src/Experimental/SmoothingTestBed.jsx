import React from "react";
import MapView from "../Routes/Map/MapView";
import { malmoPath } from "./testPath";
import { naiveAveraging } from "./naiveAveraging";
import { withSpeed, pruneFastPoints } from "./speed";
const SmoothingTestBed = ({}) => {
<<<<<<< HEAD
	let malmoPathWithSpeed = withSpeed(malmoPath);
	let smoothPath = pruneFastPoints(malmoPath, 10);
=======
  let malmoPathWithSpeed = withSpeed(malmoPath);
  let smoothPath = pruneFastPoints(malmoPath, 6);
>>>>>>> 80a13d035fe10ae21d55f86849a297e7cb0762e4

  return (
    <MapView
      myLocations={malmoPathWithSpeed}
      path={smoothPath.map(p => [p.lat, p.lng])}
    ></MapView>
  );
};

export default SmoothingTestBed;

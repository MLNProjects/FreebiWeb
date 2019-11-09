import React from "react";

import "./App.css";
import MapView from "./MapView";
import useInterval from "./hooks/useInterval";

import Header from "./Components/Header/header";

function App() {
  const [isOn, setIsOn] = React.useState(false);
  const [positions, setPositions] = React.useState([]);

  const updateLocations = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(p => {
        const coord = {
          lat: p.coords.latitude + Math.random(),
          long: p.coords.longitude
        };
        setPositions([...positions, coord]);
      });
    } else {
      /* geolocation IS NOT available */
    }
  };

  useInterval(() => {
    updateLocations();
  }, 5000);

  console.log(positions);

  React.useEffect(() => {}, []);

  return isOn ? (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header />

      <MapView locations={positions}></MapView>
    </div>
  ) : (
    <button onClick={() => setIsOn(true)}>turn on</button>
  );
}

export default App;

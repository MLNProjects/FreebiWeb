// from https://itnext.io/creating-react-useposition-hook-for-getting-browsers-geolocation-2f27fc1d96de

import { useState, useEffect } from "react";

const watcherOptions = {
  enableHighAccuracy: true,
};

export default () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lng: coords.longitude,
      timestamp: new Date(),
    });
  };
  const onError = error => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    let watcher = geo.watchPosition(
      onChange,
      onError,
      watcherOptions,
    );
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...position, error };
};

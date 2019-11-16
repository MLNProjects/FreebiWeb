export const naiveAveraging = path => {
  const ALPHA = 0.5;
  let newPath = path.slice(1).map((l, i) => ({
    lat: ALPHA * l.lat + (1 - ALPHA) * path[i].lat,
    lng: ALPHA * l.lng + (1 - ALPHA) * path[i].lng,
    timestamp: l.timestamp,
  }));

  return newPath;
};

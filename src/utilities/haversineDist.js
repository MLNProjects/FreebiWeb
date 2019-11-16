export default (a, b) => {
  // generally used geo measurement function
  var R = 6378.137; // Radius of earth in KM
  var dLat = (b[0] * Math.PI) / 180 - (a[0] * Math.PI) / 180;
  var dLon = (b[1] * Math.PI) / 180 - (a[1] * Math.PI) / 180;
  var f =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((a[0] * Math.PI) / 180) *
      Math.cos((b[0] * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
  var d = R * c;
  return d * 1000; // meters
};

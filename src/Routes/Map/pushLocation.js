import { db } from "../../utilities/base";

export default (myUserId, location) => {
  console.log("push called with user id:" + myUserId);

  if (myUserId) {
    console.log("pushing data");
    let geoPoint = { lat: location.lat, lng: location.lng };
    db.collection("locations")
      .add({
        coordinates: geoPoint,
        timestamp: location.timestamp,
        user_id: myUserId
      })
      .then(() => console.log("document written"))
      .catch(err => console.log(err));
  }
};

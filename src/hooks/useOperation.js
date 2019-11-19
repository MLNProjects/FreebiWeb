import * as React from "react";
import { db } from "../utilities/base";

export function useOperation(id) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db.collection("locations").onSnapshot(
      snapshot => {
        console.log(snapshot);
        let newLocations = [];
        snapshot.forEach(doc => {
          let newDoc = doc.data();
          let newLocation = {
            lat:
              newDoc.coordinates.latitude || newDoc.coordinates.lat,
            lng:
              newDoc.coordinates.longitude || newDoc.coordinates.lng,
            timestamp: newDoc.timestamp,
          };
          newLocations.push(newLocation);
        });
        setLocations(newLocations);
        setLoading(false);
      },
      err => {
        console.log(err);
        setError(err);
      },
    );

    return () => unsubscribe();
  }, [id]);

  return {
    error,
    loading,
    locations,
  };
}
export default useOperation;

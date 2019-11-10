import "leaflet/dist/leaflet.css";
import React from "react";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import icon from "./marker.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import euclidianDist from "../../utilities/euclidianDist";
import usePosition from "../../hooks/usePosition";

let iconImg = new Image(icon);

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 16]
});

L.Marker.prototype.options.icon = DefaultIcon;

const DEFAULT_CENTER = [59.35, 18.06];

const MapView = ({ locations }) => {
  return (
    <Map
      zoomControl={false}
      center={
        locations.length > 0 ? locations[locations.length - 1] : DEFAULT_CENTER
      }
      zoom={13}
      style={{ width: "100vw", height: "100vh" }}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((l, i) => {
        return (
          <Marker position={l} key={i}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapView;
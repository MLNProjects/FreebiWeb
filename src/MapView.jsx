import React from "react";
import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import worldGeoJSON from "geojson-world-map";

const position = [59.35, 18.06];

const MapView = ({ locations }) => {
  return (
    <Map
      zoomControl={false}
      center={position}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <GeoJSON
				data={worldGeoJSON}
				style={() => ({
					color: '#4a83ec',
					weight: 0.5,
					fillColor: '#1a1d62',
					fillOpacity: 1,
				})}
			/> */}
      {/*locations.map((l, i) => (
				<Marker position={l} key={i}>
					<Popup>
						A pretty CSS3 popup.
						<br />
						Easily customizable.
					</Popup>
				</Marker>
			))*/}
    </Map>
  );
};

export default MapView;

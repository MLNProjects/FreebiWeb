import 'leaflet/dist/leaflet.css';
import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [59.35, 18.06];

const MapView = ({ locations }) => {
	return (
		<Map center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
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

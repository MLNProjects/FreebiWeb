import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [51.505, -0.09];

const MapView = () => {
	return (
		<Map center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup.
					<br />
					Easily customizable.
				</Popup>
			</Marker>
		</Map>
	);
};

export default MapView;

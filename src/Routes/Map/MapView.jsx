import 'leaflet/dist/leaflet.css';
import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, Polyline, TileLayer, ZoomControl } from 'react-leaflet';
import myMarker from './blueMarker.png';
import otherMarker from './yellowMarker.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import euclidianDist from '../../utilities/euclidianDist';
import usePosition from '../../hooks/usePosition';

let myLocationIcon = L.icon({
	iconUrl: myMarker,
	shadowUrl: iconShadow,
	iconAnchor: [8, 8],
});

let otherLocationsIcon = L.icon({
	iconUrl: otherMarker,
	shadowUrl: iconShadow,
	iconAnchor: [8, 8],
});

const DEFAULT_CENTER = [59.35, 18.06];
//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const MapView = ({ myLocations, locations, path }) => {
	return (
		<Map
			zoomControl={false}
			center={myLocations && myLocations.length > 0 ? myLocations[myLocations.length - 1] : DEFAULT_CENTER}
			zoom={13}
			style={{ width: '100vw', height: '100vh' }}
		>
			<ZoomControl position="bottomright" />
			<TileLayer
				url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			{myLocations &&
				myLocations.map((l, i) => {
					return (
						<Marker icon={myLocationIcon} position={l} key={i}>
							<Popup>
								{l.speed}
								<br />
							</Popup>
						</Marker>
					);
				})}
			{locations &&
				locations.map((l, i) => {
					return (
						<Marker icon={otherLocationsIcon} position={l} key={i}>
							<Popup>
								{l.speed}
								<br />
							</Popup>
						</Marker>
					);
				})}
			{path && <Polyline color="blue" positions={path} />}
		</Map>
	);
};

export default MapView;

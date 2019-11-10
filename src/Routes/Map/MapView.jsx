import 'leaflet/dist/leaflet.css';
import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import euclidianDist from '../../utilities/euclidianDist';
import usePosition from '../../hooks/usePosition';

let iconImg = new Image(icon);

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const DEFAULT_CENTER = [59.35, 18.06];

const MapView = () => {
	const position = usePosition();
	const MIN_DISTANCE_FOR_LOCATION_UPDATE = 0.1;
	const [locations, setLocations] = React.useState([]);

	React.useEffect(() => {
		if (position.lat) {
			if (
				locations.length === 0 ||
				euclidianDist(
					[locations[locations.length - 1].lat, locations[locations.length - 1].lng],
					[position.lat, position.lng]
				) > MIN_DISTANCE_FOR_LOCATION_UPDATE
			) {
				setLocations(locations => [...locations, { lat: position.lat, lng: position.lng }]);
			}
		}
	}, [position, locations]);

	return (
		<Map
			zoomControl={false}
			center={locations.length > 0 ? locations[locations.length - 1] : DEFAULT_CENTER}
			zoom={13}
			style={{ width: '100%', height: '100%' }}
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

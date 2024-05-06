import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [40.7128, -74.0060]; // Default center (New York City)

const MapComponent = ({ location = center }) => {
  return (
    <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>A pretty CSS3 popup.<br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

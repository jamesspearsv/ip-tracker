import * as L from 'leaflet';

export default function MapContainer() {
  const map = L.map('map').setView([51.505, -0.09], 13);
  return <div id="map" style={{ height: '250px' }}></div>;
}

import { useEffect } from 'react';
import * as L from 'leaflet';
import styles from './Map.module.css';

let mounted = false;

export default function Map() {
  // init map component using LeafletJS
  useEffect(() => {
    if (!mounted) {
      const map = L.map('map', { zoomControl: false }).setView(
        [51.505, -0.09],
        13
      );
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // change mounted state
      mounted = true;
    }
  }, []);

  return <div id="map" className={styles.map}></div>;
}

import { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import styles from './Map.module.css';

type MapProps = { lat: number; long: number };

export default function Map({ lat, long }: MapProps) {
  // define refs to div#map and leaflet Map class
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  useEffect(() => {
    // if map has not been initiated yet
    if (mapRef.current && !leafletMap.current) {
      const map = L.map(mapRef.current, { zoomControl: false }).setView(
        [lat, long],
        13
      );

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      L.marker([lat, long]).addTo(map);

      leafletMap.current = map;
    } else if (leafletMap.current) {
      leafletMap.current.setView([lat, long], 13);
    }

    // Cleanup when component unmounts
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [lat, long]);

  return <div ref={mapRef} className={styles.map}></div>;
}

import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import InfoDisplay from './components/InfoDisplay';
import Map from './Map';
import { geoAPIRes } from './types/api';

/*
# API Request Fields
- ip address
- location (city, state, zip)
- timezone
- isp
*/

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [info, setInfo] = useState<geoAPIRes | null>(null);

  useEffect(() => {
    (async () => {
      const host = 'https://api.ipgeolocation.io/ipgeo';
      const key = 'apiKey=a62affa0c2a343f898478c0648ad2810';
      const fields =
        'fields=city,state_code,zipcode,latitude,longitude,isp,time_zone';

      const url = !query
        ? `${host}?${key}&${fields}`
        : `${host}?${key}&ip=${query}&${fields}`;

      const res = await fetch(url);
      if (!res.ok) return;

      const json: geoAPIRes = await res.json();
      console.log(json);
      setInfo(json);
    })();
  }, [query]);

  return (
    <main>
      <Hero setQuery={setQuery} />
      {info && (
        <>
          <InfoDisplay
            ip={info.ip}
            isp={info.isp}
            timezone={info.time_zone.offset}
            location={{
              city: info.city,
              state: info.state_code,
              zip: info.zipcode,
            }}
          />
          <Map
            lat={parseFloat(info.latitude)}
            long={parseFloat(info.longitude)}
          />
        </>
      )}
    </main>
  );
}

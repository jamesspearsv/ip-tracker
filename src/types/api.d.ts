// Geo IP API response types
export type geoAPIRes = {
  city: string;
  ip: string;
  isp: string;
  latitude: string;
  longitude: string;
  state_code: string;
  time_zone: { offset: number };
  zipcode: string;
};

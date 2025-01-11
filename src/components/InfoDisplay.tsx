import { geoAPIRes } from '../types/api';
import styles from './InfoDisplay.module.css';

// hack: hr dividers should be rendered using ::after pseudo-class

type InfoDisplayProps = {
  ip: geoAPIRes['ip'];
  timezone: geoAPIRes['time_zone']['offset'];
  isp: geoAPIRes['isp'];
  location: {
    city: geoAPIRes['city'];
    state: geoAPIRes['state_code'];
    zip: geoAPIRes['zipcode'];
  };
};

export default function InfoDisplay({
  ip,
  timezone,
  isp,
  location,
}: InfoDisplayProps) {
  return (
    <div className={styles.infoContainer}>
      <div>
        <div className={styles.heading}>IP ADDRESS</div>
        <p>{ip}</p>
      </div>
      <hr className={styles.divider} />
      <div>
        <div className={styles.heading}>LOCATION</div>
        <p>{`${location.city}, ${location.state} ${location.zip}`}</p>
      </div>
      <hr className={styles.divider} />
      <div>
        <div className={styles.heading}>TIMEZONE</div>
        <p>UTC {timezone.toLocaleString()}</p>
      </div>
      <hr className={styles.divider} />
      <div>
        <div className={styles.heading}>ISP</div>
        <p>{isp}</p>
      </div>
    </div>
  );
}

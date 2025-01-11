import styles from './InfoDisplay.module.css';

// hack: hr dividers should be rendered using ::after psuedo-class

export default function InfoDisplay() {
  return (
    <div className={styles.infoContainer}>
      <div>
        <div className={styles.heading}>IP ADDRESS</div>
        <p>192.168.0.101</p>
      </div>
      <hr className={styles.divider} />
      <div>
        <div className={styles.heading}>LOCATION</div>
        <p>Bridgeport, WV 26330</p>
      </div>
      <hr className={styles.divider} />
      <div>
        <div className={styles.heading}>TIMEZONE</div>
        <p>America/New York</p>
      </div>
      <hr className={styles.divider} />
      <div>
        <div className={styles.heading}>ISP</div>
        <p>Frontier</p>
      </div>
    </div>
  );
}

import styles from './Hero.module.css';
import ArrowIcon from '../assets/icon-arrow.svg?react';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>IP Address Tracker</h1>
      <div className={styles.input}>
        <input type="text" placeholder="Search for any IP address or domain" />
        <button>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

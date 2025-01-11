import styles from './Hero.module.css';
import ArrowIcon from '../assets/icon-arrow.svg?react';
import { useState } from 'react';

type HeroProps = {
  setQuery: (lookup: string) => void;
};

export default function Hero({ setQuery }: HeroProps) {
  const [value, setValue] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setValue(value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery(value);
    setValue('');
  }

  return (
    <div className={styles.hero}>
      <h1>IP Address Tracker</h1>
      <form className={styles.input} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address"
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit">
          <ArrowIcon />
        </button>
      </form>
    </div>
  );
}

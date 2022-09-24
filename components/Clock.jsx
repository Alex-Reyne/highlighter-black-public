import { useEffect, useState } from 'react';

import styles from '../styles/Clock.module.scss';

export default function Clock() {
  const [dateTime, setDateTime] = useState('');
  const updateClock = () => {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    let date = new Date();

    const dateString = `
    ${days[date.getDay()]} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
  `;

    setTimeout(() => {
      updateClock();
    }, 1000);

    setDateTime(dateString);
  };

  useEffect(() => {
    updateClock();
  }, []);

  return <p className={styles.time}>{dateTime}</p>;
}

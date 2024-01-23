'use client';
import { useState } from 'react';
import styles from '@/partials/_select.module.scss';

export default function Select() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('to do');
  const [columns, setColumns] = useState(['to do', 'doing', 'done']);

  return (
    <div className={styles.select}>
      <div onClick={() => setOpen(!open)} className={styles['select-trigger']}>
        <span>{selected}</span>
        <div className={styles.arrow}></div>
      </div>
      <div className={`${styles['custom-options']} ${open && styles.open}`}>
        {columns.map(column => {
          return (
            <span
              key={column}
              className={styles.option}
              onClick={e => {
                setSelected(e.target.textContent);
                setOpen(!open);
              }}
            >
              {column}
            </span>
          );
        })}
      </div>
    </div>
  );
}

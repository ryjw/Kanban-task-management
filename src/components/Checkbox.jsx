"use client";

import React, { useState } from "react";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ children }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={styles.checkboxWrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <p
        className={`${isChecked ? styles.completed : ""} ${styles.subtaskText}`}
      >
        {children}
      </p>
    </label>
  );
}

"use client";

import React, { useState } from "react";
import styles from "../partials/_checkbox.module.scss";

export default function Checkbox() {
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
      <p className={styles.subtaskText}>Settings- Account Page</p>
    </label>
  );
}

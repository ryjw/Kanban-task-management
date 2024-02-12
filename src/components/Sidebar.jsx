"use client";
import { useState } from "react";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const [boards, setboards] = useState(["boardOne", "boardTwo"]);

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.subheading}>ALL BOARDS {`(${boards.length})`}</h2>
    </div>
  );
}

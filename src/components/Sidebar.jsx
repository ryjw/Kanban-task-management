"use client";
import { useState } from "react";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const [boards, setboards] = useState(["boardOne", "boardTwo"]);

  return (
    <div className={styles.outerSidebar}>
      <div className={styles.innerSidebar}>
        <h2 className={styles.subheading}>ALL BOARDS {`(${boards.length})`}</h2>
      </div>
    </div>
  );
}

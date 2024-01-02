"use client";
import { useState } from "react";
import styles from "../partials/_select.module.scss";

export default function Select() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("to do");
  const [array, setArray] = useState(["to do", "doing", "done"]);

  return (
    <div className={styles.select}>
      <div onClick={() => setOpen(!open)} className={styles["select-trigger"]}>
        <span>{selected}</span>
        <div className={styles.arrow}></div>
      </div>
      <div className={`${styles["custom-options"]} ${open && styles.open}`}>
        {array.map((item) => {
          return (
            <span
              className={styles.option}
              onClick={(e) => {
                setSelected(e.target.textContent);
                setOpen(!open);
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

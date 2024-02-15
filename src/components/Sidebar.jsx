"use client";
import { useState } from "react";
import styles from "./Sidebar.module.scss";
import iconBoard from "@/assets/icon-board-split.svg";
import Image from "next/image";

export default function Sidebar() {
  const [boards, setboards] = useState(["boardOne", "boardTwo"]);

  return (
    <div className={styles.outerSidebar}>
      <div className={styles.innerSidebar}>
        <ul>
          <h2 className={styles.subheading}>
            ALL BOARDS {`(${boards.length})`}
          </h2>
          {boards.map((board) => {
            return (
              <li className={styles.boardList}>
                <Image src={iconBoard} alt="board icon" />
                <div>{board}</div>
              </li>
            );
          })}
          <li className={styles.boardList}>
            <Image src={iconBoard} alt="board icon" />
            <div className={styles.newBoard}>+ Create New Board</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

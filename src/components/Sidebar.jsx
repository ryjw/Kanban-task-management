"use client";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import iconBoard from "@/assets/icon-board-split.svg";
import iconHideSidebar from "@/assets/icon-hide-sidebar.svg";
import iconShowSidebar from "@/assets/icon-show-sidebar.svg";
import Image from "next/image";

export default function Sidebar({ boards, currentBoard, setCurrentBoard }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      <div
        className={`${styles.sidebar} ${
          sidebarVisible ? styles.visible : styles.hidden
        }`}
      >
        <ul>
          <h2 className={styles.subheading}>
            ALL BOARDS {`(${boards.length})`}
          </h2>
          {boards.map((board) => {
            if (board.id === currentBoard.id) {
              return (
                <li key={board.id} className={styles.listSelected}>
                  <Image
                    src={iconBoard}
                    alt="board icon"
                    className={styles.selectedIcon}
                  />
                  <div>{board.name}</div>
                </li>
              );
            } else {
              return (
                <li
                  key={board.id}
                  onClick={() => {
                    setCurrentBoard(board);
                  }}
                  className={styles.boardList}
                >
                  <Image
                    src={iconBoard}
                    alt="board icon"
                    className={styles.boardIcon}
                  />
                  <div>{board.name}</div>
                </li>
              );
            }
          })}
          <li className={styles.boardList}>
            <Image
              src={iconBoard}
              alt="board icon"
              className={styles.boardIcon}
            />
            <div className={styles.newBoard}>+ Create New Board</div>
          </li>
        </ul>
        <div
          onClick={() => {
            setSidebarVisible(false);
          }}
          className={styles.hideSidebar}
        >
          <Image
            src={iconHideSidebar}
            alt="hide sidebar icon"
            className={styles.hideSidebarIcon}
          />
          <div>Hide Sidebar</div>
        </div>
      </div>
      <div
        className={`${styles.sidebarReplacement} ${
          sidebarVisible ? styles.hidden : styles.visible
        }`}
      >
        <div
          onClick={() => {
            setSidebarVisible(true);
          }}
          className={styles.showSidebar}
        >
          <Image src={iconShowSidebar} alt="show sidebar" />
        </div>
      </div>
    </>
  );
}

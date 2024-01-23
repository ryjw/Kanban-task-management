"use client";

import styles from "@/partials/_dropdownmenu.module.scss";
import { FaEllipsisVertical } from "react-icons/fa6";

//TODO: add onclick and functionality
export default function DropdownMenu() {
  return (
    <div>
      <FaEllipsisVertical className={styles["icon"]} />
      <div className={styles["menuText"]}>
        <p className={styles["edit"]} onClick={() => {}}>
          Edit Task
        </p>
        <p className={styles["delete"]} onClick={() => {}}>
          Delete Task
        </p>
      </div>
    </div>
  );
}

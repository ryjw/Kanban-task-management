"use client";

import styles from "@/partials/_dropdownmenu.module.scss";
import { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

//TODO: ADD- onclick list open corresponding modal

export default function DropdownMenu({ options, variant = "default" }) {
  const [open, setOpen] = useState(false);
  // console.log(options);
  return (
    <div className={styles["menuContainer"]}>
      <FaEllipsisVertical
        className={styles["menuTrigger"]}
        onClick={() => setOpen(!open)}
      />
      {open ? (
        <ul className={styles[variant]}>
          {options.map((option) => {
            //check if option contain edit or delete word and render classname based on that

            const isEdit = option.toLowerCase().includes("edit");
            const isDelete = option.toLowerCase().includes("delete");

            const className = isEdit ? "edit" : isDelete ? "delete" : " ";

            return (
              <li
                key={option}
                className={styles[className.toLowerCase()]}
                onClick={() => console.log(`clicked ${option}`)}
              >
                {option}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

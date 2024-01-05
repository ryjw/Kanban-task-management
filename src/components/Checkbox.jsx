"use client";

import React, { useState } from "react";
import styles from "../partials/_checkbox.module.scss";
import { FaCheck } from "react-icons/fa";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className={styles.checkboxWrapper}>
        <label>
          <input
            className={styles.hiddenCheckbox}
            type="checkbox"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <svg
            className={`${styles.checkbox} ${
              isChecked ? styles.checkboxActive : ""
            }`}
            aria-hidden="true"
            viewbox="0 0 15 11"
            fill="none"
          >
            <path
              d="M1 5.5L6 10L14 1"
              strokeWidth="2"
              stroke={isChecked ? "#fff" : "none"}
            />
          </svg>
          Don&apos;t you dare to check me!
        </label>
      </div>
    </>
  );
}

// import styles from "../partials/_checkbox.module.scss";
// import { useState } from "react";
// import { FaCheck } from "react-icons/fa";

// export default function Checkbox() {
//   const [isChecked, setIsChecked] = useState(false);
//   return (
//     // <label className={styles.checkboxWrapper}>
//     <label>
//       <input
//         className={styles.hiddenCheckbox}
//         type="checkbox"
//         onChange={() => {
//           setIsChecked(!isChecked);
//         }}
//       />
//       <span
//         className={`${styles.checkbox} ${
//           isChecked ? styles.checkboxActive : ""
//         }`}
//         aria-hidden="true"
//       >
//         {isChecked && <FaCheck fill={"white"} size={"12"} />}
//       </span>
//       Don&apos;t you dare to check me!
//     </label>
//   );
// }

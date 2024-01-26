import styles from "@/partials/_subtask.module.scss";
import TextField from "./TextField";
import Button from "./Button";
import { IoCloseSharp } from "react-icons/io5";

export default function ListComponent() {
  return (
    <div className={styles.sections}>
      <label className={styles.subTitle}>Subtasks</label>
      <div className={styles.subtasks}>
        <TextField variant="alt" placeholder="e.g. Drink coffee & smile" />
        <button className={styles.xBtn}>
          <IoCloseSharp />
        </button>
      </div>
      <Button variant="secondary" content="+Add New Subtask" />
    </div>
  );
}

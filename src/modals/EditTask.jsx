import TextField from "@/components/TextField";
import Textarea from "@/components/Textarea";
import styles from "@/partials/_editTask.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@/components/Button";
import Select from "@/components/Select";

export default function EditTask() {
  return (
    <form className={styles.mainContainer}>
      <label className={styles.mainTitle}>Edit Task</label>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Title</label>
        <TextField
          variant="default"
          placeholder="Add authentication endpoints"
        />
      </div>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Description</label>
        <Textarea
          variant="default"
          placeholder=" e.g. It's always good to take a break This 15 minute break will recharge the batteries a little."
        />
      </div>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Subtasks</label>
        <div className={styles.subtasks}>
          <TextField variant="alt" placeholder="Define user model" />
          <button className={styles.xBtn}>
            <IoCloseSharp />
          </button>
        </div>
        <Button variant="secondary">+Add New Subtask</Button>
      </div>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Status</label>
        <Select />
        <Button variant="default">Save Changes</Button>
      </div>
    </form>
  );
}

import styles from "@/partials/_addTask.module.scss";
import TextField from "@/components/TextField";
import Select from "@/components/Select";
import Button from "@/components/Button";
import Textarea from "@/components/Textarea";
import { IoCloseSharp } from "react-icons/io5";

export default function AddTask() {
  return (
    <form className={styles.mainDiv}>
      <label className={styles.mainTitle}> Add New Task</label>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Title</label>
        <TextField variant="default" placeholder="e.g. Take coffee break" />
      </div>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Description</label>
        <Textarea
          variant="default"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
        />
      </div>
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
      <div className={styles.sections}>
        <label className={styles.subTitle}>Status</label>
        <Select />
        <Button variant="default" content="Create Task" />
      </div>
    </form>
  );
}

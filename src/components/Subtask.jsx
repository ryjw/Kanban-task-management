import styles from "../partials/_subtask.module.scss";
import TextField from "./TextField";
import Select from "./Select";
import Button from "./Button";
import Textarea from "./Textarea";

export default function ListComponent() {
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
        <div className={styles.temp}>
          <TextField variant="alt" placeholder="e.g. Drink coffee & smile" />
          <button>X</button>
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

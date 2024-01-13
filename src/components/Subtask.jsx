import styles from "../partials/_subtask.module.scss";
import TextField from "./TextField";

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
        <textarea
          className={styles.textarea}
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"
        ></textarea>
      </div>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Subtasks</label>
        <div className={styles.temp}>
          <TextField variant="alt" placeholder="e.g. Drink coffee & smile" />
          <button>X</button>
        </div>
        <button className={styles.addBtn}>+Add New Subtask</button>
      </div>
      <div className={styles.sections}>
        <label className={styles.subTitle}>Status</label>
        <select className={styles.input} type="text" placeholder="Todo" />

        <button className={styles.createBtn}>Create Task</button>
      </div>
    </form>
  );
}

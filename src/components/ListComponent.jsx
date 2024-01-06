import styles from "../partials/_ListComponent.module.scss";

export default function ListComponent() {
  return (
    <div className={styles.test}>
      <form>
        <label> Add New Task</label>
        <div className={styles.sections}>
          <label>Title</label>
          <input type="text" placeholder="e.g. Take coffee break" />
        </div>
        <div className={styles.sections}>
          <label>Description</label>
          <textarea placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"></textarea>
        </div>
        <div className={styles.sections}>
          <label>Subtasks</label>
          <input type="text" placeholder="e.g. Make coffee" />
          <input type="text" placeholder="e.g. Drink coffee & smile" />
          <button>+Add New Subtask</button>
        </div>
        <div className={styles.sections}>
          <label>Status</label>
          <input type="text" placeholder="Todo" />
        </div>
        <button>Create Task</button>
      </form>
    </div>
  );
}

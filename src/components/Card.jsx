<<<<<<< HEAD
import styles from "@/components/Card.module.scss";
=======
import styles from "./Card.module.scss";
>>>>>>> main

export default function Card({ task }) {
  return (
    <div className={styles.card}>
      <div className={styles.text_container}>
        <h3 className={styles.taskname}>{task.name}</h3>
        <h4 className={styles.subtasks}>
          {task.subtasks.length > 0
            ? `${
                task.subtasks.filter((subtask) => subtask.isFulfilled === true)
                  .length
              } of ${task.subtasks.length} subtasks`
            : ``}
        </h4>
      </div>
    </div>
  );
}

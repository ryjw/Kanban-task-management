import styles from "@/partials/_card.module.scss";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.text_container}>
        <h3 className={styles.taskname}>QA and test all major user journeys</h3>
        <h4 className={styles.subtasks}>0 out of 3 tasks completed</h4>
      </div>
    </div>
  );
}

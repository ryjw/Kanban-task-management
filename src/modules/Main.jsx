import styles from "@/modules/Main.module.scss";

export default function Main(currentBoard) {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.columnContainer}>
        <div className={styles.bigButton}>
          <button className={styles.invisibleButton}>+ New Column</button>
        </div>
      </div>
    </div>
  );
}

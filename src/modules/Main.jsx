import styles from "@/modules/Main.module.scss";

export default function Main(currentBoard) {
  return (
    <div className={styles.outerDiv}>
      <div></div>
      <div className={styles.bigButton}>
        <button styles={styles.invisibleButton}>+ New Column</button>
      </div>
    </div>
  );
}

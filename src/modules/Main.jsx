import styles from "@/modules/Main.module.scss";

export default function Main({ currentBoard }) {
  return (
    <div className={styles.outerDiv}>
      {Object.keys(currentBoard).length > 0 ? (
        <div className={styles.columnContainer}>
          {currentBoard.columns
            .slice()
            .reverse()
            .map((column) => {
              return (
                <div className={styles.column} key={column.id}>
                  {`${column.name} (${column.tasks.length})`}
                </div>
              );
            })}
          {console.log(Object.keys(currentBoard).length, currentBoard.columns)}
          <div className={styles.bigButton}>
            <button className={styles.invisibleButton}>+ New Column</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

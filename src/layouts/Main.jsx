import Card from "@/components/Card";
import Modal from "@/components/Modal";
import styles from "./Main.module.scss";
import EditBoard from "@/forms/EditBoard";
import { useState } from "react";

export default function Main({ currentBoard, fetchBoards }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.outerDiv}>
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <EditBoard
          currentBoard={currentBoard}
          fetchBoards={fetchBoards}
          setModalOpen={setModalOpen}
        />
      </Modal>
      {Object.keys(currentBoard).length > 0 ? (
        <div className={styles.columnContainer}>
          {currentBoard.columns.map((column) => {
            return (
              <div className={styles.column} key={column.id}>
                <div
                  className={styles.columnName}
                >{`${column.name} (${column.tasks.length})`}</div>
                {column.tasks.map((task) => (
                  <Card key={task.id} task={task} />
                ))}
              </div>
            );
          })}
          <div className={styles.bigButton}>
            <button
              className={styles.invisibleButton}
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            >
              + New Column
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

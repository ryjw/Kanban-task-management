import { useState } from "react";
import styles from "./DeleteModal.module.scss";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

function DeleteModal({ type, title, onClick }) {
  const [modalOpen, setModalOpen] = useState(true);

  console.log("modal Open?", modalOpen);

  const handleDelete = () => {
    onClick();
    setModalOpen(true);
  };

  return (
    <Modal open={modalOpen} setOpen={setModalOpen}>
      <div className={styles.container}>
        <p className={styles.title}>Delete this {type}?</p>

        {type === "board" ? (
          <p className={styles.content}>
            Are you sure you want to delete the {`"${title}"`} board? This
            action will remove all columns and tasks and cannot be reversed.
          </p>
        ) : null}
        {type === "task" ? (
          <p className={styles.content}>
            Are you sure you want to delete the {`"${title}"`} task and its
            subtasks? This action cannot be reversed.
          </p>
        ) : null}
        <div className={styles.buttonContainer}>
          <Button variant="danger" onClick={() => console.log("bbye")}>
            Delete
          </Button>
          <Button
            variant="secondary"
            onClick={() => setModalOpen((prev) => !prev)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;

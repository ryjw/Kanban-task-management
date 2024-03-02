import Button from "@/components/Button";
import TextField from "@/components/TextField";
import styles from "./EditBoard.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import cross from "@/assets/icon-cross.svg";

export default function EditBoard({ currentBoard, fetchBoards, setModalOpen }) {
  const [newColumns, setNewColumns] = useState([]);
  const [editBoard, setEditBoard] = useState(currentBoard);

  function addColumn() {
    setNewColumns((prev) => [...prev, ""]);
  }

  function handleSubmit() {
    if (currentBoard.name !== editBoard.name) {
      handleBoardNameChange();
    }
    newColumns.map((name) => {
      return handleNewColumn(name);
    });
    editBoard.columns.map((column) => {
      if (
        currentBoard.columns.filter((col) => col.id === column.id)[0].name !==
        column.name
      ) {
        handleColumnNameChange(column.id, column.name);
      }
    });
    currentBoard.columns.map((column) => {
      if (
        editBoard.columns.filter((col) => col.id === column.id).length === 0
      ) {
        handleDeleteColumn(column.id);
      }
    });
    setTimeout(() => {
      fetchBoards();
      setModalOpen(false);
    }, 400);
  }

  async function handleBoardNameChange() {
    await fetch("/api/board", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editBoard.name,
        id: editBoard.id,
      }),
    });
  }

  async function handleColumnNameChange(id, name) {
    const res = await fetch("/api/column", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        id,
      }),
    });
    const data = res.json();
    console.log(data);
  }

  async function handleNewColumn(name) {
    fetch("/api/column", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        boardId: currentBoard.id,
      }),
    });
  }

  async function handleDeleteColumn(id) {
    fetch("/api/column", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
  }

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <label className={styles.heading}>Edit Board</label>
        <label className={styles.subheading}>Board Name</label>
        <TextField
          className={styles.boardName}
          value={editBoard.name}
          onChange={(e) =>
            setEditBoard((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <label className={styles.subheading}>Board Columns</label>
        <div className={styles.columns}>
          {editBoard.columns.map((column, i) => {
            return (
              <div className={styles.columnUnit} key={column.id}>
                <TextField
                  value={column.name}
                  variant={"small"}
                  onChange={(e) => {
                    setEditBoard((prev) => ({
                      ...prev,
                      columns: prev.columns.map((column, index) =>
                        index === i
                          ? { ...column, name: e.target.value }
                          : column
                      ),
                    }));
                  }}
                />
                <button
                  className={styles.button}
                  onClick={() => {
                    setEditBoard((prev) => {
                      const copy = prev.columns.slice();
                      copy.splice(i, 1);
                      return {
                        ...prev,
                        columns: copy,
                      };
                    });
                  }}
                >
                  <Image src={cross} alt="delete icon" />
                </button>
              </div>
            );
          })}
          {newColumns.map((column, i) => {
            return (
              <div className={styles.columnUnit} key={column.id}>
                <TextField
                  variant="small"
                  key={i}
                  value={column}
                  onChange={(e) => {
                    setNewColumns((prev) => {
                      return [
                        ...prev.map((name, index) => {
                          if (index === i) {
                            return e.target.value;
                          } else {
                            return name;
                          }
                        }),
                      ];
                    });
                  }}
                />
                <button
                  className={styles.button}
                  onClick={() => {
                    setNewColumns((prev) => {
                      const copy = prev.slice();
                      copy.splice(i, 1);
                      return [...copy];
                    });
                  }}
                >
                  <Image src={cross} alt="delete icon" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={addColumn} variant="secondary">
          +Add New Column
        </Button>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
}

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import TextField from "@/components/TextField";
import styles from "@/modules/EditBoard.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import cross from "@/assets/icon-cross.svg";

export default function EditBoard() {
  const [newColumns, setNewColumns] = useState([]);
  const [editBoard, setEditBoard] = useState({
    id: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
    name: "programming",
    userId: "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0",
    columns: [
      {
        id: "77c002c0-4012-477e-b556-d6f86cf9b6f7",
        name: "todo",
        boardId: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
        tasks: [
          {
            id: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
            name: "code frontend",
            description: "",
            columnId: "77c002c0-4012-477e-b556-d6f86cf9b6f7",
            subtasks: [
              {
                id: "5d459203-307b-4168-9fdc-add58122ed2f",
                name: "create form validation",
                taskId: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                isFulfilled: false,
              },
              {
                id: "c8b490b1-0489-4c60-a918-d818eb7cf50b",
                name: "write UI components",
                taskId: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                isFulfilled: false,
              },
              {
                id: "ff05d673-03cd-40e7-a084-bdef419e32ed",
                name: "make use of state",
                taskId: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                isFulfilled: false,
              },
            ],
          },
        ],
      },
      {
        id: "a949a1ac-e734-4422-bfb6-2b353c9b777d",
        name: "done",
        boardId: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
        tasks: [
          {
            id: "c0af8ec2-da9e-4197-b12b-11b1b31bf2e0",
            name: "code backend",
            description: "",
            columnId: "a949a1ac-e734-4422-bfb6-2b353c9b777d",
            subtasks: [],
          },
          {
            id: "dc5308a4-c34a-474a-9e19-59bc5097b30e",
            name: "research",
            description: "",
            columnId: "a949a1ac-e734-4422-bfb6-2b353c9b777d",
            subtasks: [],
          },
        ],
      },
      {
        id: "ad0f2103-8d95-48e8-91b9-ffdc1204a7da",
        name: "doing",
        boardId: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
        tasks: [
          {
            id: "fe30d4b7-cba3-49ec-8328-892538097432",
            name: "write API doc",
            description: "list out the requests and responses",
            columnId: "ad0f2103-8d95-48e8-91b9-ffdc1204a7da",
            subtasks: [],
          },
        ],
      },
    ],
  });
  const [currentBoard, setCurrentBoard] = useState({
    id: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
    name: "programming",
    userId: "09152012-f0bc-43bc-9f9a-5ca3a5e7c8c0",
    columns: [
      {
        id: "77c002c0-4012-477e-b556-d6f86cf9b6f7",
        name: "todo",
        boardId: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
        tasks: [
          {
            id: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
            name: "code frontend",
            description: "",
            columnId: "77c002c0-4012-477e-b556-d6f86cf9b6f7",
            subtasks: [
              {
                id: "5d459203-307b-4168-9fdc-add58122ed2f",
                name: "create form validation",
                taskId: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                isFulfilled: false,
              },
              {
                id: "c8b490b1-0489-4c60-a918-d818eb7cf50b",
                name: "write UI components",
                taskId: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                isFulfilled: false,
              },
              {
                id: "ff05d673-03cd-40e7-a084-bdef419e32ed",
                name: "make use of state",
                taskId: "14a8cea4-02bb-46bc-ba91-9d3932cbe2b4",
                isFulfilled: false,
              },
            ],
          },
        ],
      },
      {
        id: "a949a1ac-e734-4422-bfb6-2b353c9b777d",
        name: "done",
        boardId: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
        tasks: [
          {
            id: "c0af8ec2-da9e-4197-b12b-11b1b31bf2e0",
            name: "code backend",
            description: "",
            columnId: "a949a1ac-e734-4422-bfb6-2b353c9b777d",
            subtasks: [],
          },
          {
            id: "dc5308a4-c34a-474a-9e19-59bc5097b30e",
            name: "research",
            description: "",
            columnId: "a949a1ac-e734-4422-bfb6-2b353c9b777d",
            subtasks: [],
          },
        ],
      },
      {
        id: "ad0f2103-8d95-48e8-91b9-ffdc1204a7da",
        name: "doing",
        boardId: "d6504a98-953a-48fb-a3e2-9475ee553ce7",
        tasks: [
          {
            id: "fe30d4b7-cba3-49ec-8328-892538097432",
            name: "write API doc",
            description: "list out the requests and responses",
            columnId: "ad0f2103-8d95-48e8-91b9-ffdc1204a7da",
            subtasks: [],
          },
        ],
      },
    ],
  });
  useEffect(() => {
    setEditBoard(currentBoard);
  }, []);

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
    currentBoard.columns.map((column) => {
      const updatedColumn = editBoard.columns.filter(
        (col) => col.id === column.id
      );
      if (updatedColumn.length > 0) {
        if (updatedColumn.name !== column.name) {
          handleColumnNameChange(updatedColumn.id, updatedColumn.name);
        }
      } else {
        handleDeleteColumn(column.id);
      }
    });
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
    fetch("/api/column", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        id,
      }),
    });
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
              <div className={styles.columnUnit}>
                <TextField
                  key={column.id}
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
              <div className={styles.columnUnit}>
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

import TextField from "@/components/TextField";
import styles from "@/modules/EditBoard.module.scss";
import { useState, useEffect } from "react";

export default function EditBoard() {
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

  function handleSubmit() {}

  function handleNameChanges() {}

  function handleNewColumns() {}

  return (
    <div className={styles.outerDiv}>
      <label>Edit Board</label>
      <label>Board Name</label>
      <TextField />
      <label>Board Columns</label>
      {editBoard.columns.map((column, i) => {
        return (
          <TextField
            key={column.id}
            value={column.name}
            onChange={(e) => {
              setEditBoard((prev) => ({
                ...prev,
                columns: prev.columns.map((column, index) =>
                  index === i ? { ...column, name: e.target.value } : column
                ),
              }));
            }}
          />
        );
      })}
    </div>
  );
}

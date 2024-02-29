import TextField from "@/components/TextField";
import Textarea from "@/components/Textareas";
import styles from "@/partials/_editTask.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@/components/Button";
import Select from "@/components/Select";

export default function EditTask() {
  return (
    <div>
      <label className="">Edit Task</label>
      <div>
        <label className="">Title</label>
        <TextField
          variant="default"
          placeholder="Add authentication endpoints"
        />
      </div>
      <div>
        <label className="">Description</label>
        <Textarea
          variant="default"
          placeholder=" e.g. It's always good to take a break This 15 minute break will recharge the batteries a little."
        />
      </div>
      <div>
        <label className="">Subtasks</label>
        <div>
          <TextField variant="alt" placeholder="Define user model" />
          <button className="">
            <IoCloseSharp />
          </button>
        </div>
        <Button variant="secondary" content="+Add New Subtask" />
      </div>
      <div>
        <label className="">Status</label>
        <Select />
        <Button variant="default" content="Save Changes" />
      </div>
    </div>
  );
}

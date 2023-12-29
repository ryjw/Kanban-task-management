
import Sidebar from "../components/Sidebar.jsx";
import Button from "@/components/Button.jsx";
import Card from "../components/Card.jsx";
import { Test } from "@/components/Test.jsx";
import TextField from "@/components/TextField.jsx";

export default function Home() {
  return (
    <>
      <Card />
      <Sidebar/>
      <Button content={"+ Create New Board"} variant={"btn-board"} />
      <Button
        content={"+ Create New Board (Modal Version)"}
        variant="default"
      />
      <Button content={"Delete"} variant="danger" />
      <Button content={"Cancel"} variant="secondary" />

      <Test />
        <TextField variant={"default"} />;
    </>
}

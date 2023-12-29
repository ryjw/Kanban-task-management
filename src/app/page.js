import Button from "@/components/Button.jsx";
import Card from "../components/Card.jsx";
import { Test } from "@/components/Test.jsx";

export default function Home() {
  return (
    <>
      <Card />
      <Button content={"+ Create New Board"} variant={"btn-board"} />
      <Button
        content={"+ Create New Board (Modal Version)"}
        variant="default"
      />
      <Button content={"Delete"} variant="danger" />
      <Button content={"Cancel"} variant="secondary" />

      <Test />
    </>
  );
}

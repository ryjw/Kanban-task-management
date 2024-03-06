"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import LoginForm from "@/forms/LoginForm";
import RegisterForm from "@/forms/RegisterForm";
import AddTask from "@/forms/AddTask";

export default function Test() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        <Button size="lg" onClick={() => setModalOpen(true)}>
          🙌 Click to test Login Modal 🙌
        </Button>
      </div>
      {modalOpen && (
        <Modal open={modalOpen} setOpen={setModalOpen}>
          {<AddTask />}
        </Modal>
      )}
    </>
  );
}

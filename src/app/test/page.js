"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import LoginForm from "@/forms/LoginForm";
import RegisterForm from "@/forms/RegisterForm";

export default function Test() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  //toggle between login and register
  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <>
      <div>
        <Button size="lg" onClick={() => setModalOpen(true)}>
          🙌 Click to test Login Modal 🙌
        </Button>
      </div>
      {modalOpen && (
        <Modal open={modalOpen} setOpen={setModalOpen}>
          {showLogin ? (
            <LoginForm onToggle={toggleForm} />
          ) : (
            <RegisterForm onToggle={toggleForm} />
          )}
        </Modal>
      )}
    </>
  );
}

"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import LoginForm from "@/forms/LoginForm";
import RegisterForm from "@/forms/RegisterForm";

export default function Login() {
  const [modalOpen, setModalOpen] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  //toggle between login and register
  const toggleForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button size="lg" onClick={() => setModalOpen(true)}>
          Please log in to access Kanban Task Manager
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

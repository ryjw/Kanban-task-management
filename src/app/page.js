"use client";

// import Sidebar from "../components/Sidebar.jsx";
import Button from "@/components/Button.jsx";
import Card from "../components/Card.jsx";
import { Test } from "@/components/Test.jsx";
import Select from "@/components/Select.jsx";
import TextField from "@/components/TextField.jsx";

import Checkbox from "@/components/Checkbox.jsx";

import Subtask from "@/components/Subtask.jsx";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("api/board");
    console.log(res);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>test</button>
    </form>
  );
}

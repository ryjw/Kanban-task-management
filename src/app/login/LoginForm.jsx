"use client";
import { useState } from "react";
import TextField from "@/components/TextField";
import styles from "../../partials/pages/_login.module.scss";
import Button from "@/components/Button";
import { set } from "zod";
//TO DO: add type to button

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      //submit to server
      const response = await fetch(`/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      return console.log("loggin failed");
    }
    setIsSubmitting(false);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {" "}
      Login
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        content={isSubmitting ? "Loggin in" : "Login"}
        variant={"default"}
      />
    </form>
  );
}

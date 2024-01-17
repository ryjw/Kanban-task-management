"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/TextField";
import styles from "../../partials/pages/_login.module.scss";
import Button from "@/components/Button";

//TO DO: add type to button
// add zod

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      //submit to server
      const response = await fetch(`/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(data);

      if (response.ok) {
        const responseData = await response.json();
        console.log("data", responseData);
      }
    } catch (error) {
      console.log(error);
      return console.log("login failed");
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {" "}
      Login
      <input
        {...register("username", {
          required: "username is required",
        })}
        type="username"
        placeholder="Username"
      />
      {/* //display error// */}
      {errors.username && <p>{`${errors.username.message}`}</p>}
      <input
        {...register("password", {
          required: "password is required",
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <p>{`${errors.password.message}`}</p>}
      <Button disabled={isSubmitting} content={"login"} variant={"default"} />
    </form>
  );
}

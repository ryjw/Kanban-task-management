"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "../../partials/pages/_login.module.scss";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/types";
import TextField from "@/components/TextField.jsx";
import { LogoLight } from "../../assets";
import Image from "next/image";

//TO DO: add type to button
// add loader?
// use textfield component

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    render,
  } = useForm({ resolver: zodResolver(loginSchema) });

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
    <>
      <div>
        <Image scr={LogoLight} alt="logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {" "}
        <p>Login</p>
        <TextField
          variant={"default"}
          {...register("username")}
          type="username"
          placeholder="Username"
        />
        {errors.username && (
          <span className={styles.error}>{errors.username?.message}</span>
        )}
        <TextField
          variant={"default"}
          {...register("password")}
          type="username"
          placeholder="Password"
        />
        {errors.password && (
          <span className={styles.error}>{errors.username?.message}</span>
        )}
        <Button disabled={isSubmitting} content={"Login"} variant={"default"} />
      </form>
    </>
  );
}

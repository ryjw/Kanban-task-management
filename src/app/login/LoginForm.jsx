"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../partials/pages/_login.module.scss";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/types";
import TextField from "@/components/TextField.jsx";
import logo from "../../assets/logo-dark.svg";
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
      <div className={styles.formContainer}>
        <Image src={logo} alt="logo" />
        <span className={styles.heading}>Login</span>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <fieldset className={styles.fieldset}>
            <TextField
              variant={"default"}
              {...register("username")}
              type="username"
              placeholder="Username"
            />
            {/* <input
            {...register("username")}
            type="username"
            placeholder="Username"
          /> */}
            {errors.username?.message && (
              <span className={styles.error}>{errors.username?.message}</span>
            )}
          </fieldset>
          <fieldset className={styles.fieldset}>
            <TextField
              variant={"default"}
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            {/* <input
          {...register("password")}
          type="password"
          placeholder="Password"
        /> */}
            {errors.password?.message && (
              <span className={styles.error}>{errors.password?.message}</span>
            )}
          </fieldset>
          <Button
            disabled={isSubmitting}
            content={"Login"}
            variant={"default"}
          />
        </form>
        <span>Don&apos;t have an account? Sign up</span>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/types";
import TextField from "@/components/TextField.jsx";
import logo from "@/assets/logo-dark.svg";
import Image from "next/image";

// TODO: Display error message from server
// Add disable button style when submitting form
//rerouting to main page to do lateeerr

export default function LoginForm({ onToggle }) {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data) => {
    // console.log(data);
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
          <div className={styles.formGroup}>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="username"
                  placeholder="Username"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.username?.message && (
              <span className={styles.error}>{errors.username?.message}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="password"
                  placeholder="Password"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.password?.message && (
              <span className={styles.error}>{errors.password?.message}</span>
            )}
          </div>
          <Button disabled={isSubmitting} variant={"default"}>
            Login
          </Button>
        </form>
        <span className={styles.smText}>Don&apos;t have an account?</span>
        <span className={`${styles.link} ${styles.smText}`} onClick={onToggle}>
          Sign up
        </span>
      </div>
    </>
  );
}

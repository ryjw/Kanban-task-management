"use client";
import { Controller, useForm } from "react-hook-form";
import styles from "./Form.module.scss";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/types";
import TextField from "@/components/TextField.jsx";
import logo from "@/assets/logo-dark.svg";
import Image from "next/image";

// TODO: Display error message from server
// Add disable button style when submitting form
//rerouting to main page to do lateeerr

export default function RegisterForm({ onToggle }) {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { username: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data) => {
    try {
      //submit to server
      const response = await fetch(`/api/user/register`, {
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
        <span className={styles.heading}>Sign Up</span>
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
          <div className={styles.formGroup}>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <TextField
                  type="password"
                  placeholder="Confirm Password"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.confirmPassword?.message && (
              <span className={styles.error}>
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>
          <Button disabled={isSubmitting} variant={"default"}>
            Sign Up
          </Button>
        </form>
        <span className={styles.smText}>Already have an account?</span>
        <span className={`${styles.link} ${styles.smText}`} onClick={onToggle}>
          Login
        </span>
      </div>
    </>
  );
}

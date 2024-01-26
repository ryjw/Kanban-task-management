import styles from "@/partials/_textfield.module.scss";

export default function TextField({
  variant = "default",
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <input
      className={styles[variant]}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

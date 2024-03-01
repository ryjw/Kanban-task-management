import styles from "./Textarea.module.scss";

export default function Textarea({ placeholder, onChange }) {
  return (
    <textarea
      className={styles["default"]}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

import styles from "../partials/_textarea.module.scss";

export default function Textarea({ placeholder, onChange }) {
  return (
    <textarea
      className={styles["default"]}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

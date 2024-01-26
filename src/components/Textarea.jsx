import styles from "../partials/_textarea.module.scss";

export default function Textarea({ variant, placeholder, onChange }) {
  return (
    <textarea
      className={styles[variant]}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

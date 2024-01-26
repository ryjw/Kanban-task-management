import styles from "@/partials/_textfield.module.scss";

export default function TextField({ variant, placeholder, onChange }) {
  return (
    <input
      className={styles[variant]}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

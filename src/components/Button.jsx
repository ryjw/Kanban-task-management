import styles from "../partials/_button.module.scss";

export default function Button({ content, variant, fun }) {
  return (
    <button onClick={fun} className={styles[variant]}>
      {content}
    </button>
  );
}
